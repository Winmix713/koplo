import React from 'react';

interface TabsProps {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ defaultValue, className = '', children }) => {
  const [value, setValue] = React.useState(defaultValue);

  // Clone children and pass the active value
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { activeValue: value, onValueChange: setValue } as any);
    }
    return child;
  });

  return (
    <div className={className}>
      {childrenWithProps}
    </div>
  );
};

interface TabsListProps {
  className?: string;
  children: React.ReactNode;
  activeValue?: string;
  onValueChange?: (value: string) => void;
}

export const TabsList: React.FC<TabsListProps> = ({ 
  className = '', 
  children,
  activeValue,
  onValueChange
}) => {
  // Clone children and pass the active value
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { 
        isActive: activeValue === child.props.value,
        onSelect: onValueChange
      } as any);
    }
    return child;
  });

  return (
    <div className={`flex ${className}`}>
      {childrenWithProps}
    </div>
  );
};

interface TabsTriggerProps {
  value: string;
  className?: string;
  children: React.ReactNode;
  isActive?: boolean;
  onSelect?: (value: string) => void;
  onClick?: () => void;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ 
  value, 
  className = '', 
  children,
  isActive,
  onSelect,
  onClick
}) => {
  const handleClick = () => {
    if (onSelect) onSelect(value);
    if (onClick) onClick();
  };

  return (
    <button 
      className={`px-4 py-2 ${className}`}
      data-state={isActive ? 'active' : 'inactive'}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};