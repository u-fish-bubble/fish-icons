/*
 * @Date: 2024-01-13 20:32:29
 * @Description: Modify here please
 */
import React from "react";

export interface IconProps {
  // 默认不传递size，size为继承。如果传递了size使用传递的
  size?: number | string;
  // 默认不传递color，color为继承。如果传递了color使用传递的
  color?: string;
  // 自定义样式
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: (e: any) => void;
}
