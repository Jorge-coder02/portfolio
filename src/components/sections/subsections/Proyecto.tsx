import React, { type ReactNode } from "react";
import Boton from "../../ui/btn/Boton";
import BotonLink from "../../ui/btn/BotonLink";

type Props = {
  titulo: string;
  img: string;
  descripcion: string;
  link_github: string;
  link_preview: string;
  botones_tech: string[];
};

function getButton(tech: string) {
  switch (tech.toLowerCase()) {
    case "mongodb":
      return (
        <Boton
          bg_color="#034d40"
          texto="MongoDB"
          svg={
            <svg
              fill="none"
              height="15"
              viewBox="0 0 15 15"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M7.86855 0.162138C7.77385 0.0588232 7.64013 0 7.49998 0C7.35982 0 7.2261 0.0588232 7.1314 0.162138L4.50011 3.03263C2.68016 5.01804 2.56571 8.02932 4.22971 10.1471L7 13.673V15H8V13.6729L10.7702 10.1471C12.4342 8.02932 12.3198 5.01803 10.4998 3.03263L7.86855 0.162138ZM8 3C8 2.72386 7.77614 2.5 7.5 2.5C7.22386 2.5 7 2.72386 7 3V10.5C7 10.7761 7.22386 11 7.5 11C7.77614 11 8 10.7761 8 10.5V3Z"
                fill="black"
                fillRule="evenodd"
              />
            </svg>
          }
        />
      );
    case "express":
      return (
        <Boton
          bg_color="#1c8515"
          texto="Express"
          svg={
            <img
              width={18}
              height={18}
              src="/images/express.png"
              alt="logo"
            ></img>
          }
        />
      );
    case "node":
      return (
        <Boton
          bg_color="#0f6709"
          texto="Nodejs"
          svg={
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 0 1-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 0 1 1.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 0 1-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 0 1-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z" />
            </svg>
          }
        />
      );
    case "react":
      return (
        <Boton
          bg_color="rgb(31 31 33)" // #222222 color react cambiado para contraste con darkMode
          texto="React"
          svg={
            <svg
              className="w-5 h-5"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fill: "#00D8FF" }}
            >
              <title>React</title>
              <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.0 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.196-3.798 28.83 28.83 0 0 0-4.395 0A28.605 28.605 0 0 0 7.803 12.996a29.004 29.004 0 0 0 2.196 3.798z" />
            </svg>
          }
        />
      );
    case "tailwind":
      return (
        <Boton
          bg_color="#003159"
          texto="Tailwind CSS"
          svg={
            <svg
              // className="w-4 h-4"
              fill="none"
              height="15"
              viewBox="0 0 15 15"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.50006 2.5C6.47409 2.5 5.59203 2.77691 4.89966 3.37037C4.21227 3.95956 3.76259 4.81729 3.51314 5.88638C3.45869 6.1197 3.57742 6.35885 3.79619 6.45654C4.01496 6.55423 4.27228 6.483 4.40967 6.28672C4.7263 5.8344 5.04244 5.56261 5.3462 5.42313C5.64038 5.28805 5.95748 5.26068 6.32069 5.35797C6.68723 5.45615 6.97097 5.74369 7.41643 6.22816L7.43082 6.24382C7.76661 6.60905 8.17623 7.0546 8.73649 7.40028C9.31785 7.75898 10.0413 7.99999 11.0001 7.99999C12.026 7.99999 12.9081 7.72307 13.6005 7.12962C14.2878 6.54043 14.7375 5.6827 14.987 4.61361C15.0414 4.38029 14.9227 4.14114 14.7039 4.04345C14.4852 3.94576 14.2278 4.01698 14.0904 4.21326C13.7738 4.66559 13.4577 4.93737 13.1539 5.07686C12.8597 5.21194 12.5426 5.23931 12.1794 5.14202C11.8129 5.04384 11.5291 4.7563 11.0837 4.27182L11.0693 4.25616C10.7335 3.89093 10.3239 3.44538 9.76362 3.09971C9.18227 2.74101 8.45883 2.5 7.50006 2.5Z"
                fill="#37b8f9"
              ></path>
              <path
                d="M4.00006 6.99999C2.97409 6.99999 2.09203 7.2769 1.39966 7.87036C0.712271 8.45955 0.262592 9.31727 0.0131365 10.3864C-0.0413057 10.6197 0.0774162 10.8588 0.296186 10.9565C0.514956 11.0542 0.772276 10.983 0.909673 10.7867C1.2263 10.3344 1.54244 10.0626 1.8462 9.92312C2.14038 9.78804 2.45747 9.76067 2.82069 9.85796C3.18723 9.95614 3.47097 10.2437 3.91643 10.7282L3.93082 10.7438C4.2666 11.109 4.67624 11.5546 5.23649 11.9003C5.81785 12.259 6.54128 12.5 7.50006 12.5C8.52602 12.5 9.40808 12.2231 10.1005 11.6296C10.7878 11.0404 11.2375 10.1827 11.487 9.1136C11.5414 8.88027 11.4227 8.64113 11.2039 8.54343C10.9852 8.44574 10.7278 8.51697 10.5904 8.71325C10.2738 9.16558 9.95768 9.43736 9.65391 9.57684C9.35974 9.71192 9.04264 9.7393 8.67942 9.64201C8.31289 9.54383 8.02915 9.25628 7.58369 8.77181L7.56929 8.75615C7.23351 8.39092 6.82388 7.94537 6.26362 7.59969C5.68227 7.241 4.95883 6.99999 4.00006 6.99999Z"
                fill="#37b8f9"
              ></path>
            </svg>
          }
        />
      );
    default:
      return null;
  }
}

function Proyecto({
  titulo,
  img,
  descripcion,
  link_github,
  link_preview,
  botones_tech,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-0 gap-y-4 gap-x-10 rounded-lg shadow-lg md:shadow-none">
      {/*  Imagen  */}
      <div className="flex flex-1">
        <img
          className="object-cover rounded-lg shadow-xl w-full sm:h-64"
          src={img}
          loading="lazy"
          alt="imagen proyecto"
        />
      </div>
      {/* Texto */}
      <div className="flex-1 mt-2 gap-10">
        <h3
          className="text-2xl font-semibold mb-3 md:mb-0 dark:text-gray-300"
          title={titulo}
        >
          {titulo}
        </h3>
        {/*  Tecnologías (recorrer) */}
        <div className="flex gap-x-1 items-center mt-2">
          {botones_tech.map((tech, index) => (
            <React.Fragment key={index}>{getButton(tech)}</React.Fragment>
          ))}
        </div>
        <span className="mt-4 block dark:text-gray-200 tracking-normal text-md">
          {descripcion}
        </span>
        {/* Botones desarrollo */}
        <div className="mt-6 flex gap-x-3">
          {/* Github */}
          <BotonLink
            label="enlace github"
            texto="Github"
            svg={
              <svg
                fill="currentColor"
                className="feather feather-external-link text-black dark:text-black group-hover:text-white dark:group-hover:text-white"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0172337,20.0036431 C10.022429,20.1264837 10.0091724,20.2463579 9.98330461,20.3676906 C9.93784953,20.5808973 9.85006902,20.806507 9.72581375,21.0149561 C9.37258963,21.6075205 8.77254382,22.0029294 8,22.0029294 C6.18009841,22.0029294 5.46583567,21.110101 4.57152331,18.8743201 C3.96583567,17.360101 3.68009841,17.0029294 3,17.0029294 L3,15.0029294 C4.81990159,15.0029294 5.53416433,15.8957579 6.42847669,18.1315388 C7.03416433,19.6457579 7.31990159,20.0029294 8,20.0029294 C8,19.7127644 7.99602627,19.4557363 7.98766336,19.10766 C7.96806324,18.2918745 7.96580921,18.1253294 8.00139994,17.9072328 C8.01562221,17.4311461 8.13853505,17.0933379 8.38499657,16.758055 C6.15319163,16.2722225 4.64792011,15.2688507 3.78397367,13.6414131 L3.46033692,12.8803116 C3.14504523,11.9742045 3,10.9475314 3,9.76182789 C3,8.3962705 3.41634612,7.17529446 4.19401809,6.15466942 C3.95142672,5.18452501 3.98465035,3.99922139 4.52030872,2.66060213 L4.69533986,2.22319636 L5.14406803,2.07965982 C5.20414701,2.06044211 5.27718427,2.04308516 5.36298939,2.02961795 C6.2367624,1.89247825 7.48010477,2.21967938 9.10554673,3.26084348 C10.0637668,3.03871956 11.0728464,2.92657377 12.0887705,2.92657377 C12.9966325,2.92657377 13.8994565,3.01809831 14.761632,3.19853941 C16.3430593,2.20820612 17.552239,1.89759865 18.4025017,2.02979376 C18.4873192,2.04298081 18.5596096,2.06000541 18.6191923,2.07890005 L19.0707147,2.22208531 L19.2459583,2.66215824 C19.7145535,3.83889806 19.7949778,4.92336373 19.6244695,5.87228979 C20.5184674,6.94500389 21,8.26378067 21,9.76182789 C21,11.0247658 20.9095208,11.9744236 20.64943,12.8982988 L20.374903,13.6516598 C19.6562828,15.2773712 18.071463,16.2919934 15.627532,16.7752488 C15.881555,17.1269685 16,17.4840164 16,18.0029294 L16,19.0029294 C16,19.4875328 16,19.5024553 15.9988971,20.0029332 C16.0011677,20.0388683 16.0041674,20.0564681 16.0074409,20.0674343 C16.0069051,20.0676207 16.0044248,20.7127858 16,22.0029294 C15.1482062,22.0029294 14.5148687,21.5875264 14.2033753,20.9322561 C14.0418761,20.5925196 13.9936266,20.2681196 14,19.9887282 L14,18.0029294 C14,17.9190828 13.9970903,17.9142333 13.7928932,17.7100362 C13.2470903,17.1642333 13,16.7524162 13,16.0029294 L13,15.098327 L13.9000749,15.0079345 C16.5793439,14.7388614 18.0365375,13.994809 18.5196779,12.9078386 L18.7454621,12.2906007 C18.925117,11.6452201 19,10.8592573 19,9.76182789 C19,8.5957377 18.5929046,7.6324677 17.8229924,6.86285829 L17.399809,6.43984136 L17.5725269,5.86695742 C17.7259675,5.35801396 17.7624331,4.7557886 17.6001079,4.06889646 C17.5731265,4.07573155 17.5450908,4.08318009 17.5159887,4.09128216 C16.9805442,4.24035094 16.3120315,4.56021479 15.5064471,5.09869159 L15.139019,5.34429154 L14.7100567,5.23792413 C13.880388,5.0321958 12.9888516,4.92657377 12.0887705,4.92657377 C11.0878626,4.92657377 10.0984637,5.05392119 9.18445917,5.30309711 L8.73840507,5.42470039 L8.3568182,5.1636581 C7.52362575,4.59367395 6.83145179,4.25470831 6.27642408,4.09636524 C6.23678449,4.08505652 6.19904057,4.07494077 6.16316427,4.06592263 C5.9695217,4.8609066 6.04611126,5.51405583 6.24223012,6.00416015 L6.47738305,6.59181128 L6.04688499,7.05581793 C5.36089731,7.79520071 5,8.69496705 5,9.76182789 C5,10.7385874 5.11434439,11.5479509 5.32388252,12.1576254 L5.58556699,12.7770588 C6.23973869,14.0045823 7.62920432,14.743076 10.1065792,15.0086252 L11,15.1043908 L11,16.0029294 C11,16.7524162 10.7529097,17.1642333 10.2071068,17.7100362 C10.0029097,17.9142333 10,17.9190828 10,18.0029294 L9.98276345,18.1877969 C9.97135799,18.2484289 9.97135799,18.404984 9.98708636,19.0596217 C9.99432024,19.3607065 9.99844271,19.5990116 9.99963477,19.8480351 C10.0115828,19.8995855 10.013389,19.9328439 10.0172337,20.0036431 Z"
                  fillRule="evenodd"
                ></path>
              </svg>
            }
            enlace={link_github}
          ></BotonLink>
          {/* Preview */}
          <BotonLink
            label="enlace página"
            texto="Probar"
            svg={
              <svg
                className="feather feather-external-link text-black dark:text-black group-hover:text-white dark:group-hover:text-white"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" x2="21" y1="14" y2="3"></line>
              </svg>
            }
            enlace={link_preview}
          ></BotonLink>
        </div>
      </div>
    </div>
  );
}

export default Proyecto;
