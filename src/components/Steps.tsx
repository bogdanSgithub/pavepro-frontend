import { useTranslation, Trans } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import step_2 from '@/assets/2nd_step.jpg';
import step_1 from '@/assets/1st_step.jpg';
import step_3 from '@/assets/3rd_step.jpg';

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id='services' className="mx-4 sm:mx-16 lg:mx-24 xl:mx-40 2xl:mx-72 my-12 md:my-24">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
        <Trans i18nKey="servicesTitle" 
        components={[
            <span className="text-primary" />,
        ]} />
      </h2>

      <Tabs defaultValue="1st_step" className="w-full flex flex-col">
        <TabsList className="flex justify-center mb-6 sm:mb-4 bg-transparent p-0 w-full max-w-full">
        <TabsTrigger
        value="1st_step"
        className="px-4 py-2 data-[state=active]:text-primary"
        >
        {t('services.tab1.title')}
        </TabsTrigger>
        <TabsTrigger
            value="2nd_step"
            className="px-4 py-2 data-[state=active]:text-primary border-none"
        >
            {t('services.tab2.title')}
        </TabsTrigger>
        <TabsTrigger
            value="3rd_step"
            className="px-4 py-2 data-[state=active]:text-primary"
        >
            {t('services.tab3.title')}
        </TabsTrigger>
        </TabsList>

        <TabsContent value="1st_step">
        <div
            className="bg-white rounded-xl p-2 border border-transparent"
            style={{
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.5)' // glow effect (customizable color & size)
            }}
        >
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {/* Text */}
            <article className="p-2 sm:p-4 lg:p-8 w-full md:w-1/2 prose prose-lg">
                <h3 className='text-2xl text-center lg:text-3xl font-bold mb-2 md:mb-4'>{t('services.tab1.title2')}</h3>
                <p className='text-gray-600 md:text-lg xl:text-xl indent-8 text-justify md:text-left'>{t('services.tab1.description')}</p>
            </article>

            {/* Image */}
            <figure className=" w-full md:w-1/2 aspect-square overflow-hidden rounded-md">
                <img
                src={step_1}
                alt={t('services.tab1.imageAlt')}
                className="w-full h-auto rounded-md"
                />
            </figure>
            </div>
        </div>
        </TabsContent>

        <TabsContent value="2nd_step">
        <div
            className="bg-white rounded-xl p-2 border border-transparent"
            style={{
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' // glow effect (customizable color & size)
            }}
        >
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {/* Text */}
            <article className="p-2 sm:p-4 lg:p-8 w-full md:w-1/2 prose prose-lg">
                <h3 className='text-2xl text-center lg:text-3xl font-bold mb-2 md:mb-4'>{t('services.tab2.title2')}</h3>
                <p className='text-gray-600 md:text-lg xl:text-xl indent-8 text-justify md:text-left'>{t('services.tab2.description')}</p>
            </article>

            {/* Image */}
            <figure className="w-full md:w-1/2 aspect-square overflow-hidden rounded-md">
                <img
                src={step_2}
                alt={t('services.tab2.imageAlt')}
                className="w-full h-auto rounded-md"
                />
            </figure>
            </div>
        </div>
        </TabsContent>

        <TabsContent value="3rd_step">
        <div
            className="bg-white rounded-xl p-2 border border-transparent"
            style={{
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' // glow effect (customizable color & size)
            }}
        >
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {/* Text */}
            <article className="p-2 sm:p-4 lg:p-8 w-full md:w-1/2 prose prose-l">
                <h3 className='text-2xl text-center lg:text-3xl font-bold mb-2 md:mb-4'>{t('services.tab3.title2')}</h3>
                <p className='text-gray-600 md:text-lg xl:text-xl indent-8 text-justify md:text-left'>{t('services.tab3.description')}</p>
            </article>

            {/* Image */}
            <figure className="w-full md:w-1/2 aspect-square overflow-hidden rounded-md">
                <img
                src={step_3}
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