interface Props {}

const urlCV = `https://www.topcv.vn/download-cv?cv_id=ClsCAgVWWlZQAVBSAAEFVQcGVQ1bAA4OVQdQVA71f3&dontcount=1`;

const DownloadCV = (props: Props) => {
  return (
    <a
      download
      href={urlCV}
      className="mt-5 transform ring-2 ring-offset-2 dark:ring-offset-white/50 hover:dark:ring-offset-white transition-all py-3 px-5 inline-flex justify-center items-center rounded-xl text-sm text-center dark:text-white text-gray-600 font-semibold"
    >
      Download CV
    </a>
  );
};

export default DownloadCV;
