import { TextAnimate } from "@/components/ui/text-animate";

export function Hero() {
  return (
    <h1 className='font-extrabold text-5xl tracking-tight sm:text-[5rem]'>
      <TextAnimate animation='blurInUp' by='character' duration={0.5}>
        rustroam
      </TextAnimate>
    </h1>
  );
}
