/**
 * @copyright 2025 skarwuuu
 * @license Apache-2.0
 */

"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, animate } from "motion/react";

const springConfig = { stiffness: 400, damping: 35 };

const Cursor = () => {
  const [hoveredLink, setHoveredLink] = useState<HTMLElement | null>(null);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const width = useMotionValue(20);
  const height = useMotionValue(20);
  const borderRadius = useMotionValue("50%");

  const [isTextHover, setIsTextHover] = useState<boolean>(false);
  const [textLineHeight, setTextLineHeight] = useState<number>(24);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      if (hoveredLink) {
        const rect = hoveredLink.getBoundingClientRect();
        const linkCenterX = rect.left + rect.width / 2;
        const linkCenterY = rect.top + rect.height / 2;
        const stickiness = 0.1;

        const stickyX = linkCenterX + (e.clientX - linkCenterX) * stickiness;
        const stickyY = linkCenterY + (e.clientY - linkCenterY) * stickiness;

        mouseX.set(stickyX);
        mouseY.set(stickyY);
      } else {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    const handleMouseDown = () => {
      setIsMouseDown(true);
      if (hoveredLink) {
        const rect = hoveredLink.getBoundingClientRect();
        animate(width, rect.width + 4, { type: "spring", ...springConfig });
        animate(height, rect.height + 4, { type: "spring", ...springConfig });
      } else if (isTextHover) {
        animate(width, 4, { type: "spring", ...springConfig });
        animate(height, textLineHeight * 0.8, {
          type: "spring",
          ...springConfig,
        });
      } else {
        animate(width, 16, { type: "spring", ...springConfig });
        animate(height, 16, { type: "spring", ...springConfig });
      }
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
      if (hoveredLink) {
        const rect = hoveredLink.getBoundingClientRect();
        animate(width, rect.width + 12, { type: "spring", ...springConfig });
        animate(height, rect.height + 12, { type: "spring", ...springConfig });
      } else if (isTextHover) {
        animate(width, 4, { type: "spring", ...springConfig });
        animate(height, textLineHeight, { type: "spring", ...springConfig });
      } else {
        animate(width, 20, { type: "spring", ...springConfig });
        animate(height, 20, { type: "spring", ...springConfig });
        animate(borderRadius, "50%", { type: "spring", ...springConfig });
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const interactiveElements = document.querySelectorAll("a, button");

    const textSelectors = "p, span, li, h1, h2, h3, h4, h5, h6, label, pre, code, blockquote";
    const textElements = document.querySelectorAll(textSelectors);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      setHoveredLink(target);

      const rect = target.getBoundingClientRect();
      mouseX.set(rect.left + rect.width / 2);
      mouseY.set(rect.top + rect.height / 2);

      animate(width, rect.width + 12, { type: "spring", ...springConfig });
      animate(height, rect.height + 12, { type: "spring", ...springConfig });
      animate(borderRadius, "8px", { type: "spring", ...springConfig });
    };

    const handleMouseLeave = () => {
      setHoveredLink(null);

      animate(width, 20, { type: "spring", ...springConfig });
      animate(height, 20, { type: "spring", ...springConfig });
      animate(borderRadius, "50%", { type: "spring", ...springConfig });
    };

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter as EventListener);
      el.addEventListener("mouseleave", handleMouseLeave as EventListener);
    });

    const handleTextEnter = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;

      if (target.closest("a, button") !== null) {
        return;
      }

      if (isMouseDown) {
        return;
      }

      setIsTextHover(true);

      const style = window.getComputedStyle(target);
      const fontSize = parseFloat(style.fontSize);
      let lineHeight = parseFloat(style.lineHeight);

      if (isNaN(lineHeight)) {
        lineHeight = fontSize * 1.2;
      }
      setTextLineHeight(lineHeight);

      animate(width, 4, { type: "spring", ...springConfig });
      animate(height, lineHeight, { type: "spring", ...springConfig });
      animate(borderRadius, "2px", { type: "spring", ...springConfig });
    };

    const handleTextLeave = () => {
      setIsTextHover(false);

      if (isMouseDown) {
        return;
      }

      if (hoveredLink === null) {
        animate(width, 20, { type: "spring", ...springConfig });
        animate(height, 20, { type: "spring", ...springConfig });
        animate(borderRadius, "50%", { type: "spring", ...springConfig });
      }
    };

    textElements.forEach((el) => {
      el.addEventListener("mouseenter", handleTextEnter as EventListener);
      el.addEventListener("mouseleave", handleTextLeave as EventListener);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter as EventListener);
        el.removeEventListener("mouseleave", handleMouseLeave as EventListener);
      });

      textElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleTextEnter as EventListener);
        el.removeEventListener("mouseleave", handleTextLeave as EventListener);
      });
    };
  }, [
    hoveredLink,
    mouseX,
    mouseY,
    width,
    height,
    borderRadius,
    isTextHover,
    textLineHeight,
    isMouseDown,
  ]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width,
        height,
        borderRadius,
        backgroundColor: "#d6d3d1",
        mixBlendMode: "difference",
        pointerEvents: "none",
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        zIndex: 99999999,
      }}
      className="hidden lg:block"
    />
  );
};

export default Cursor;
