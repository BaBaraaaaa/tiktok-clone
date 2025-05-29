import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { setGlobalSearch, addToHistory } from '@/redux/slices/global';
import { searchVideos, setCurrentVideo } from '@/redux/slices/videos';
import { Typography, TextField, Button, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state: any) => state.videos.videos);
  const searchQuery = useAppSelector((state) => state.global.globalSearch);
  const handleSearch = () => {
    dispatch(searchVideos(searchQuery));
  };

  useEffect(() => {
    dispatch(searchVideos(searchQuery)); // Tìm kiếm khi searchQuery thay đổi
  }, [searchQuery, dispatch]);
  return (
    <div>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {videos.map((video: any, index: any) => (
          <Box key={index}>
            <Card>
              <Link
                to={`/video/${video.id}`}
                onClick={() => {
                  dispatch(setCurrentVideo(video.id));
                  dispatch(addToHistory(video.id));
                }}
              >
                <CardMedia component="img" height="140" image={video.thumbnail} alt={video.title} />
              </Link>
              <CardContent>
                <Typography variant="h6">{video.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {video.uploader} • {video.views} views • {video.uploadDate}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
