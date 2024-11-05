type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
  };
  
  export default function Button({ children, onClick, type = 'button' }: ButtonProps) {
    return (
      <button
        type={type}
        onClick={onClick}
        className="px-4 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark"
      >
        {children}
      </button>
    );
  }
  