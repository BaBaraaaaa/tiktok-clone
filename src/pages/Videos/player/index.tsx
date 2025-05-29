import { useAppSelector } from '@/redux/store';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

const VideoPlayer = () => {
  const { id } = useParams<{ id: string }>();
  const video = useAppSelector((state) => state.videos.currentVideo);

  if (!video || video.id !== id) return <Typography>Video not found</Typography>;

  return (
    <Box>
      <Typography variant="h4">{video.title}</Typography>
      <Box component="img" src={video.thumbnail} alt={video.title} sx={{ width: '100%', maxHeight: 400 }} />
      <Typography variant="body1">
        {video.uploader} • {video.views} views • {video.uploadDate}
      </Typography>
      <Typography variant="body2">Duration: {video.duration}</Typography>
    </Box>
  );
};
export default VideoPlayer;