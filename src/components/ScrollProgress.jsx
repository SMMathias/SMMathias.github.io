import { useEffect, useRef } from "react";

function ScrollProgress() {
  const fillRef = useRef(null);

  useEffect(() => {
    let frame = 0;

    function update() {
      frame = 0;
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - doc.clientHeight);
      const ratio = Math.min(1, window.scrollY / max);
      if (fillRef.current) {
        fillRef.current.style.transform = `scaleX(${ratio})`;
      }
    }

    function onScroll() {
      if (frame === 0) {
        frame = requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame !== 0) {
        cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div aria-hidden="true" className="progress-track">
      <span className="progress-fill" ref={fillRef} />
    </div>
  );
}

export default ScrollProgress;
