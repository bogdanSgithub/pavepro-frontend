import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

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
      const res = await fetch('https://pavepro-backend.onrender.com/email', {
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
    <section className="w-full max-w-2xl mx-auto my-16 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">{t('emailForm.title')}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label>
          {t('emailForm.name')} <span className="text-red-500">*</span>
        </Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
          <Input
            placeholder={t('emailForm.firstName')}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <Input
            placeholder={t('emailForm.lastName')}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label>
            {t('emailForm.email')} <span className="text-red-500">*</span>
          </Label>
          <Input
            type="email"
            placeholder={t('emailForm.emailPlaceholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <Label>
            {t('emailForm.phone')} <span className="text-red-500">*</span>
          </Label>
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <Label>
          {t('emailForm.address')} <span className="text-gray-500 text-sm">({t('emailForm.optional')})</span>
        </Label>
        <Input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div>
        <h3 className='text-2xl mt-10 mb-5 font-semibold'>{t('emailForm.subTitle')}</h3>
        <Label>
          {t('emailForm.message')} <span className="text-red-500">*</span>
        </Label>
        <Textarea
          placeholder={t('emailForm.messagePlaceholder')}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
        <div>
          <Label>{t('emailForm.attachments')}</Label>
          <p className='mb-3 text-gray-600'>{t('emailForm.attachmentsSubtitle')}</p>
          <Input
            type="file"
            multiple
            accept="image/*,application/pdf"
            onChange={(e) => setFiles(e.target.files)}
          />
        </div>

        <Button variant="important" type="submit" className="w-full px-10 py-6 2xl:px-14 text-xl" disabled={loading}>
          {loading ? t('emailForm.sending') : t('emailForm.submit')}
        </Button>

        {success && <p className="text-green-600 text-center">{success}</p>}
        {error && <p className="text-red-600 text-center">{error}</p>}
      </form>
    </section>
  );
}
