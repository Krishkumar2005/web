export const Footer = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <footer className={`bg-white border-t border-gray-200 py-6 text-center text-sm text-gray-500 ${isOpen ? "translate-x-60" : "translate-x-0"}`}>
            © 2026 BentoVeda. Hybrid Architecture Demo.
        </footer>
    );
}

