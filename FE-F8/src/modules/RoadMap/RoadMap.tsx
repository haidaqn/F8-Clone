import * as React from 'react';
import { Avatar, Box, Button, Stack, Typography } from '@mui/material';

export interface RoadMapProps {}

export default function RoadMap(props: RoadMapProps) {
  return (
    <Box
      padding="0 40px 0 20px">
      <Stack
        margin="0 0 80px 0"
      >
        <Typography
            component="h2"
            margin="19px 0"
            fontWeight="600"
            fontSize="2.8rem"
            color="#242424"
          >
            Lộ trình học
        </Typography>
        <Typography
          fontSize="16px"
          color="#292929"
          
        >
          Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. Ví dụ: Để đi làm với vị trí “Lập trình viên Front-end” bạn nên tập trung vào lộ trình “Front-end”.
        </Typography>
      </Stack>

      {/* chứa 2 item */}
      <Box
        display="flex"
      >
        {/* item 1 */}
        <Box
          border="2px solid #e8e8e8"
          borderRadius="16px"
          width="500px"
        > 
          <Box
            padding="24px"
          >
            <Box
              display="flex"
            >
              <Box
                width="300px"
                paddingBottom="20px"
              >
                <Typography
                  fontSize="20px"
                  fontWeight="700"
                  padding="0 0 14px 0"
                >
                  Lộ trình học Front-end
                </Typography>
                <Typography
                  fontSize="14px"
                  lineHeight="1.6"
                >
                  Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.
                </Typography>
              </Box>
            <Box
                paddingLeft="24px"
              >
              <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="127px"
                  height="127px"
                  borderRadius="50%"
                  border="5px solid #f05123"
              >
                <Avatar
                    sx={{
                      width: "97px", height: "97px",
                      borderRadius: "50%", objectFit: "cover",
                    }}
                  alt="avatar"
                  src="https://files.fullstack.edu.vn/f8-prod/learning-paths/2/61a0439062b82.png"
                >
                </Avatar>
              </Box>
            </Box>
            </Box>
            <Box>
              <Button
                sx={{
                  backgroundColor: "#f05123",
                  color: "white", borderRadius: "16px",
                  padding :"9px 16px", fontSize: "13px",
                  '&:hover': {
                    opacity : "0.9"
                  }
                }}
              >
                Xem chi tiết
              </Button>
            </Box>
          </Box>

        </Box>
        {/* kết thức item 1 */}
        {/* item 2 */}
        <Box
          border="2px solid #e8e8e8"
          borderRadius="16px"
          width="500px"
          marginLeft="24px"
        > 
          <Box
            padding="24px"
          >
            <Box
              display="flex"
            >
              <Box
                width="300px"
                paddingBottom="20px"
              >
                <Typography
                  fontSize="20px"
                  fontWeight="700"
                  padding="0 0 14px 0"
                >
                  Lộ trình học Back-end
                </Typography>
                <Typography
                  fontSize="14px"
                  lineHeight="1.6"
                >
                  Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé.
                </Typography>
              </Box>
            <Box
                paddingLeft="24px"
              >
              <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="127px"
                  height="127px"
                  borderRadius="50%"
                  border="5px solid #f05123"
              >
                <Avatar
                    sx={{
                      width: "97px", height: "97px",
                      borderRadius: "50%", objectFit: "cover",
                    }}
                  alt="avatar"
                  src="https://files.fullstack.edu.vn/f8-prod/learning-paths/3/61a0439cc779b.png"
                >
                </Avatar>
              </Box>
            </Box>
            </Box>
            <Box>
              <Button
                sx={{
                  backgroundColor: "#f05123",
                  color: "white", borderRadius: "16px",
                  padding :"9px 16px", fontSize: "13px",
                  '&:hover': {
                    opacity : "0.9"
                  }
                }}
              >
                Xem chi tiết
              </Button>
            </Box>
          </Box>

        </Box>
        {/* item 2 */}
      </Box>

      <Stack
        direction="row"
        display="flex" justifyContent="space-between" alignItems="center"
        marginTop="50px"
        overflow="hidden"
      >
        <Box
          width="400px"
        >
            <Typography
              variant="body1"
              component="h3"
              fontWeight="600"
              fontSize="26px"
              padding="20px 0"
              margin="8px 0"
            >
              Tham gia cộng đồng học viên F8 trên Facebook
          </Typography>
          <Typography
            margin="14px 0"
            lineHeight="1.6"
            fontSize="14px"
          >
            Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.
          </Typography>
          <Button
                variant="outlined"
                size="small"
                sx={{
                  textAlign:"center",
                  transition:"0.5s ease",
                  width: '124px',
                  marginTop:"8px",
                  padding:"10px 16px",
                  borderRadius: '16px',
                  height: '40px',
                  fontWeight: '700',
                  color: '#000',
                  fontSize: '13px',
                  backgroundColor: "white",
                  border: '2px solid black',
                  
                  '&:hover': {
                    backgroundColor: 'black',
                    color: '#fff',
                    border: '2px solid black'
                  }
                }}
              >
                Tìm hiểu ngay
              </Button>
        </Box>
        <Box>
          <Avatar
            sx={{
              width: "420px", height: "420px",
              position: "relative", right:"-44px"
            }}
            src="https://fullstack.edu.vn/static/media/fb-group-cards.4bd525b1b8baf7b1e5a2.png">
          </Avatar>
        </Box>
      </Stack>

  </Box>)
}
