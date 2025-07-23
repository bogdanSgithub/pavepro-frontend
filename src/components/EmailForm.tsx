import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function EmailForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('message', message);
    if (files) {
      Array.from(files).forEach((file) => {
        formData.append('attachments', file);
      });
    }

    try {
      const res = await fetch('http://localhost:3000/email', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Something went wrong');

      setSuccess(data.message);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setAddress('');
      setMessage('');
      setFiles(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto mt-16 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Get a Quote Today</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label>Name</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
            <Input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <Input
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input
              type="tel"
              placeholder="(555) 555-5555"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <Label>Address <span className="text-gray-500 text-sm">(optional)</span></Label>
          <Input
            placeholder="123 Main St, City, Country"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div>
          <Label>Message</Label>
          <Textarea
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div>
          <Label>Attachments</Label>
          <Input
            type="file"
            multiple
            accept="image/*,application/pdf"
            onChange={(e) => setFiles(e.target.files)}
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
