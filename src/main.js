import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

let proxy = { skew: 0 },
  skewSetter = gsap.quickSetter('.skew-container', 'skewY', 'deg'),
  clamp = gsap.utils.clamp(-10, 10);

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {
        skew: 0,
        duration: 0.5,
        ease: 'power3',
        overwrite: true,
        onUpdate: () => skewSetter(proxy.skew),
      });
    }
  },
});

ßgsap.set('.skew-container', {
  transformOrigin: 'right center',
  force3D: true,
});
