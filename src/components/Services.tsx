import { useTranslation, Trans } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import restauration from '@/assets/restauration_1.jpg';
import pave from '@/assets/after_4.jpg';
import stain from '@/assets/after_3.jpg';

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className="px-6 md:px-56 py-24">
      <h2 className="text-5xl font-bold mb-8 px-14">
        <Trans i18nKey="servicesTitle" 
        components={[
            <span className="text-primary" />,
        ]} />
      </h2>

      <Tabs defaultValue="pave" className="w-full flex flex-col">
        <TabsList className="flex flex-wrap justify-center gap-4 mb-4 bg-transparent p-0 w-full max-w-full min-h-[48px]">
        <TabsTrigger
        value="pave"
        className="px-4 py-2 text-gray-700 data-[state=active]:text-primary min-w-[100px]"
        >
        {t('services.tab1.title')}
        </TabsTrigger>
        <TabsTrigger
            value="restauration"
            className="px-4 py-2 text-gray-700 data-[state=active]:text-primary border-none"
        >
            {t('services.tab2.title')}
        </TabsTrigger>
        <TabsTrigger
            value="taches"
            className="px-4 py-2 text-gray-700 data-[state=active]:text-primary"
        >
            {t('services.tab3.title')}
        </TabsTrigger>
        </TabsList>

        <TabsContent value="pave">
        <div
            className="bg-white rounded-xl p-2 border border-transparent"
            style={{
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)' // glow effect (customizable color & size)
            }}
        >
            <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text */}
            <article className="p-8 w-full md:w-1/2 prose prose-lg text-gray-700">
                <h3>{t('services.tab1.title')}</h3>
                <p>{t('services.tab1.description')}</p>
            </article>

            {/* Image */}
            <figure className="w-full md:w-1/2 aspect-square overflow-hidden rounded-md">
                <img
                src={pave}
                alt={t('services.tab1.imageAlt')}
                className="w-full h-auto rounded-md"
                />
            </figure>
            </div>
        </div>
        </TabsContent>

        <TabsContent value="restauration">
        <div
            className="bg-white rounded-xl p-2 border border-transparent"
            style={{
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' // glow effect (customizable color & size)
            }}
        >
            <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text */}
            <article className="p-8 w-full md:w-1/2 prose prose-lg text-gray-700">
                <h3>{t('services.tab2.title')}</h3>
                <p>{t('services.tab2.description')}</p>
            </article>

            {/* Image */}
            <figure className="w-full md:w-1/2 aspect-square overflow-hidden rounded-md">
                <img
                src={restauration}
                alt={t('services.tab2.imageAlt')}
                className="w-full h-auto rounded-md"
                />
            </figure>
            </div>
        </div>
        </TabsContent>

        <TabsContent value="taches">
        <div
            className="bg-white rounded-xl p-2 border border-transparent"
            style={{
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' // glow effect (customizable color & size)
            }}
        >
            <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text */}
            <article className="p-8 w-full md:w-1/2 prose prose-lg text-gray-700">
                <h3>{t('services.tab3.title')}</h3>
                <p>{t('services.tab3.description')}</p>
            </article>

            {/* Image */}
            <figure className="w-full md:w-1/2 aspect-square overflow-hidden rounded-md">
                <img
                src={stain}
                alt={t('services.tab3.imageAlt')}
                className="w-full h-auto rounded-md"
                />
            </figure>
            </div>
        </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}