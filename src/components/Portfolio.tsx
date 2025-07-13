import { ImgComparisonSlider } from '@img-comparison-slider/react';

export default function Portfolio() {
  return (
    <section className="bg-red-500">
    <ImgComparisonSlider hover={true}>
      <img slot="first" src="https://img-comparison-slider.sneas.io/demo/images/before.webp" />
      <img slot="second" src="https://img-comparison-slider.sneas.io/demo/images/after.webp" />
    </ImgComparisonSlider>
    </section>
  );
}