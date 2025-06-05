import { useAppSelector } from '@/redux/hook';
import { Box, Typography, Stack, Avatar, Divider, Button, IconButton } from '@mui/material';
import { ThumbUpOutlined, ShareOutlined, MoreHoriz } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import type { RootState } from '@/redux/store';

const VideoPlayer = () => {
  const video = useAppSelector((state: RootState) => state.videos.currentVideo);

  if (!video) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h6">Video không tồn tại hoặc chưa được tải.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ px: { xs: 1, md: 3 }, pt: 2, pb: 6, maxWidth: 1200, mx: 'auto' }}>
      {/* Video Player */}
      <Box sx={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', mb: 2 }}>
        <video
          controls
          src={video.videoUrl || ''}
          style={{ width: '100%', height: '100%', borderRadius: 12, objectFit: 'cover' }}
        >
          Trình duyệt của bạn không hỗ trợ video.
        </video>
      </Box>

      {/* Tiêu đề */}
      <Typography variant="h5" fontWeight={600} gutterBottom>
        {video.title}
      </Typography>

      {/* Info: Avatar, Channel, Actions */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        spacing={2}
        sx={{ mb: 1 }}
      >
        {/* Avatar + Channel */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar sx={{ width: 44, height: 44 }} />
          <Box>
            <Typography variant="subtitle1" fontWeight={500}>
              {video.userId || 'Tên kênh'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {video.views} lượt xem • {video.uploadDate}
            </Typography>
          </Box>
        </Stack>

        {/* Actions */}
        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            startIcon={<ThumbUpOutlined />}
            sx={{ textTransform: 'none', borderRadius: 20 }}
          >
            Thích
          </Button>
          <Button
            variant="outlined"
            startIcon={<ShareOutlined />}
            sx={{ textTransform: 'none', borderRadius: 20 }}
          >
            Chia sẻ
          </Button>
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </Stack>
      </Stack>

      <Divider sx={{ my: 2 }} />

      {/* Mô tả video */}
      <Box sx={{ bgcolor: '#f9f9f9', p: 2, borderRadius: 2 }}>
        <Typography variant="body2" color="text.primary" whiteSpace="pre-line">
          {video.description || 'Không có mô tả.'}
        </Typography>
      </Box>
    </Box>
  );
};

export default VideoPlayer;
