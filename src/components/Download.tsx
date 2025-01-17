interface DownloadButtonProps {
  link?: string;
  buttonText?: string;
  playStoreLink?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ link,  playStoreLink }) => {
  return (
    <div className="my-4 text-center">
      {(link || playStoreLink) ? (
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* App Store Button */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center px-6 py-3 text-white bg-black rounded-full shadow-md hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                  <path
                    d="M32.6226 23.7016C32.6026 20.0267 34.2591 17.253 37.6118 15.2103C35.7359 12.5167 32.902 11.0347 29.1601 10.7443C25.6177 10.464 21.7461 12.8171 20.3292 12.8171C18.8324 12.8171 15.3998 10.8445 12.7057 10.8445C7.13769 10.9346 1.22048 15.3004 1.22048 24.1822C1.22048 26.8057 1.69945 29.516 2.65738 32.3131C3.93461 35.988 8.54465 45 13.3542 44.8498C15.8688 44.7897 17.645 43.0574 20.9179 43.0574C24.091 43.0574 25.7375 44.8498 28.5414 44.8498C33.3909 44.7797 37.5619 36.5888 38.7793 32.9039C32.2733 29.8298 32.6226 23.8919 32.6226 23.7016ZM26.9748 7.25968C29.6989 4.01535 29.4494 1.06142 29.3696 0C26.9648 0.140187 24.1808 1.64219 22.5943 3.49466C20.848 5.4773 19.8203 7.93058 20.0398 10.6943C22.6442 10.8945 25.019 9.55274 26.9748 7.25968Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="40" height="45" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <div className="flex flex-col ml-2 leading-4 text-left">
                <span className="text-xs text-white">Get it on</span>
                <span className="text-sm font-semibold text-white">App Store</span>
              </div>
            </a>
          )}

          {/* Google Play Button */}
          {playStoreLink && (
            <a
              href={playStoreLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center px-6 py-3 text-white bg-black rounded-full shadow-md hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0ZM16.5 27.5L16.5 12.5L27.5 20L16.5 27.5Z"
                  fill="white"
                ></path>
              </svg>
              <div className="flex flex-col ml-2 leading-4 text-left">
                <span className="text-xs text-white">Get it on</span>
                <span className="text-sm font-semibold text-white">Google Play</span>
              </div>
            </a>
          )}
        </div>
      ) : (
        /* Coming Soon Button */
        <button className="px-6 py-3 text-black bg-white rounded-full shadow-md border border-gray-300 cursor-default">
          Coming Soon
        </button>
      )}
    </div>
  );
};

export default DownloadButton;
