import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { setGlobalSearch, addToHistory } from '@/redux/slices/global';
import { searchVideos, setCurrentVideo } from '@/redux/slices/videos';
import { Typography, Grid, Card, CardMedia, CardContent, Box, Avatar, Stack, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { RootState } from '@/redux/store';

// Dữ liệu mock
import { mockChannels, mockVideos } from '@/mockDb/mockDb';
import { PATH_VIDEO } from '@/routes/path';
import type { Video } from '@/types/mock';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { videos } = useAppSelector((state: RootState) => state.global);
  console.log(videos);
  const searchQuery = useAppSelector((state) => state.global.globalSearch);
  const [loading, setLoading] = useState(true); // Trạng thái loading

  const handleSearch = () => {
    setLoading(true);
    dispatch(searchVideos(searchQuery));
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    dispatch(searchVideos(searchQuery));
    setLoading(false);
  }, [searchQuery, dispatch]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ padding: { xs: 1, sm: 2, md: 3 } }}>
      <Grid
        container
        spacing={2}
        sx={{
          gap: 2, // Khoảng cách giữa các video
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)', // 1 cột trên mobile
            sm: 'repeat(2, 1fr)', // 2 cột trên tablet
            md: 'repeat(3, 1fr)', // 3 cột trên desktop nhỏ
            lg: 'repeat(5, 1fr)', // 4 cột trên desktop lớn
          },
        }}
      >
        {videos.map((video: Video) => {
          const channel = mockChannels.find((ch) => ch.userId === video.userId);
          return (
            <Box key={video.videoId}>
              <Card
                sx={{
                  maxWidth: 345,
                  boxShadow: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  borderRadius: 2,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover .thumbnail': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  },
                  '&:hover .card-content': {
                    backgroundColor: 'rgba(0,0,0,0.03)',
                  },
                }}
              >
                <Link
                  to={PATH_VIDEO.watch(video.videoId)}
                  onClick={() => {
                    dispatch(setCurrentVideo(video));
                    dispatch(addToHistory(video.videoId));
                  }}
                  style={{ textDecoration: 'none' }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="194"
                      className="thumbnail"
                      image={video.thumbnailUrl}
                      alt={video.title}
                      sx={{
                        borderRadius: 2,
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 8,
                        right: 8,
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        color: 'white',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                      }}
                    >
                      {video.duration}
                    </Box>
                  </Box>
                </Link>
                <CardContent className="card-content" sx={{ padding: '8px 0' }}>
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <Avatar src={channel?.profilePictureUrl || ''} sx={{ width: 36, height: 36 }} />
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 500,
                          fontSize: '16px',
                          lineHeight: '22px',
                          color: 'text.secondary',
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 2,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {video.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '14px', marginTop: '4px' }}>
                        {channel?.fullName || 'Unknown Channel'}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '14px' }}>
                        {video.views.toLocaleString()} views • {new Date(video.uploadDate).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};

export default HomePage;
