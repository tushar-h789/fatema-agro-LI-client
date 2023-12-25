import { Link } from "react-router-dom";

const Video = () => {
  return (
    <>
      <div className="flex gap-4 my-10">
        <div className="w-3/12 hidden lg:block">
          <ul className="menu bg-base-200 w-full rounded-box">
            <li>
              <Link to="https://youtube.com/shorts/dHJeOAL-SaU?si=xxlua7prIMTxGy0g">
                Video One
              </Link>
            </li>
            <li className="my-2">
              <Link to="https://youtube.com/shorts/UEHZuqWYJRw?si=s_aI_3nBQ5aVuvt1">
                Video Two
              </Link>
            </li>
            <li>
              <Link to="https://youtu.be/pRyf9OlUusk?si=0o-V2d52-ypi-6PH">
                Video Three
              </Link>
            </li>
            <li className="my-2">
              <Link to="https://youtu.be/LQlYzTA-Npw?si=smbnc_RkKht2IzSj">
                Video Four
              </Link>
            </li>
          </ul>
        </div>
        <div className=" lg:w-9/12 ml-2 md:ml-0">
          <iframe
            // width="560"
            // height="315"
            className="mx-auto md:w-[560px] md:h-[315px]"
            src="https://www.youtube.com/embed/LQlYzTA-Npw?si=UwtQKKnV3FcOr4vb" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Video;
