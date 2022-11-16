import './style.css'
import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelectorAll('.scroll-tracker');

const scrollTrackingTimeline = new ScrollTimleine({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [CSS.percent(0), CSS.percent(100)]
})

scrollTracker.animate(
  {
    transform: ['scaleX(0)', 'scaleX(1)'],
  },
  {
    duration: 1,
    timeline: scrollTrackingTimeline
  }
);
