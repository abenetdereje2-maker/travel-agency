const Container = ({ children, className = "" }) => {
  return (
    <div 
      className={`
        // 1. Fluid scaling for the "Premium" feel
        mx-auto 
        w-full 
        max-w-[1440px] 
        
        // 2. Intelligent padding that breathes on large screens
        px-6 
        md:px-12 
        lg:px-20 
        
        // 3. Optional: Subtly constrained height or spacing contexts
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;