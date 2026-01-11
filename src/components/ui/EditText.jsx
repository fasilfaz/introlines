import React, { useState, forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const editTextClasses = cva(
  'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed hover:border-opacity-80',
  {
    variants: {
      variant: {
        default: 'focus:ring-primary-background',
        error: 'border-red-500 focus:ring-red-500',
        success: 'border-green-500 focus:ring-green-500',
      },
      size: {
        small: 'text-xs px-2 py-1',
        medium: 'text-sm px-3 py-2',
        large: 'text-md px-4 py-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const EditText = forwardRef(({
  // Required parameters with defaults
  placeholder = "E-mail",
  text_font_size = "text-sm",
  text_font_family = "Epilogue",
  text_font_weight = "font-normal",
  text_line_height = "leading-snug",
  text_text_align = "left",
  text_color = "text-text-primary",
  border_border = "border border-input-border",
  border_border_radius = "rounded-sm",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  type = "text",
  value,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  disabled = false,
  readOnly = false,
  required = false,
  className,
  id,
  name,
  autoComplete,
  maxLength,
  minLength,
  pattern,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : 'w-full',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build required Tailwind classes
  const requiredClasses = [
    text_font_size,
    text_font_weight,
    text_line_height,
    text_color,
    border_border_radius,
    `text-${text_text_align}`,
    'border',
    'border-border-primary',
  ]?.filter(Boolean)?.join(' ');

  // Handle focus events
  const handleFocus = (event) => {
    setIsFocused(true);
    if (typeof onFocus === 'function') {
      onFocus(event);
    }
  };

  const handleBlur = (event) => {
    setIsFocused(false);
    if (typeof onBlur === 'function') {
      onBlur(event);
    }
  };

  // Handle change events
  const handleChange = (event) => {
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  return (
    <input
      ref={ref}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      autoComplete={autoComplete}
      maxLength={maxLength}
      minLength={minLength}
      pattern={pattern}
      style={{
        fontFamily: text_font_family || 'Epilogue',
      }}
      className={twMerge(
        editTextClasses({ variant, size }),
        requiredClasses,
        optionalClasses,
        'px-3 py-2',
        isFocused && 'ring-2 ring-primary-background ring-offset-1',
        className
      )}
      aria-invalid={variant === 'error'}
      aria-required={required}
      {...props}
    />
  );
});

EditText.displayName = 'EditText';

export default EditText;