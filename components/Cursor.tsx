"use client";
import { useState } from "react";

export default function CustomCursorWrapper({
  children,
  customCursorContent,
  className,
  noCursor = false,
}: {
  children: React.ReactNode;
  customCursorContent: React.ReactNode;
  className?: string;
  noCursor?: boolean;
}) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: any) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        position: "relative",
        cursor: noCursor ? "none" : "",
      }}
    >
      {children}
      {isHovered && (
        <div
          style={{
            position: "fixed",
            top: cursorPos.y,
            left: cursorPos.x,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        >
          {customCursorContent}
        </div>
      )}
    </div>
  );
}
