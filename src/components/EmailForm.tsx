import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function EmailForm() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const formData = new FormData();
    formData.append('to', to);
    formData.append('subject', subject);
    formData.append('text', text);
    if (file) formData.append('images', file);

    try {
      const res = await fetch('http://192.168.0.62:3000/email', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSuccess(data.message);
      setTo('');
      setSubject('');
      setText('');
      setFile(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-xl mx-auto mt-16 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Send an Email</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="to">To</Label>
          <Input
            id="to"
            type="email"
            placeholder="recipient@example.com"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="text">Message</Label>
          <Textarea
            id="text"
            placeholder="Write your message here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="file">Image (optional)</Label>
          <Input
            id="file"
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Sending...' : 'Send Email'}
        </Button>

        {success && <p className="text-green-600 text-sm text-center">{success}</p>}
        {error && <p className="text-red-600 text-sm text-center">{error}</p>}
      </form>
    </section>
  );
}
