interface DownloadButtonProps {
  link: string;
  buttonText: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ link, buttonText }) => {
  return (
    <div className="my-6 text-center">
      <a
        href={link}
        className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default DownloadButton;
