import { formatDuration } from "../Utils/formatDuration";
import { formatPostAt } from "../Utils/formatPostAt";
import { formatViews } from "../Utils/formatViews";

interface VideoGridItemProps {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string; // for video preview when hovered
}

const VideoGridItem = ({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: VideoGridItemProps) => {
  return (
    <div className="flex flex-col gap-2">
      <a href={`/watch?v=${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          className="block h-full w-full rounded-xl object-cover"
        />
        <div className="absolute bottom-1 right-1 rounded bg-secondary-dark px-0.5 text-sm text-secondary">
          {formatDuration(duration)}
        </div>
      </a>
      <div className="flex gap-2">
        <a className="flex-shrink-0" href={`/@${channel.id}`}>
          <img className="h-10 w-10 rounded-full" src={channel.profileUrl} />
        </a>
        <div className="flex flex-col text-sm">
          <a className="text-base font-bold" href={`//watch?v=${id}`}>
            {title}
          </a>
          <a
            className="flex-shrink-0 text-secondary-text"
            href={`/@${channel.id}`}
          >
            {channel.name}
          </a>
          <div className="text-secondary-text">{`${formatViews(views)} views • ${formatPostAt(postedAt)}`}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoGridItem;
