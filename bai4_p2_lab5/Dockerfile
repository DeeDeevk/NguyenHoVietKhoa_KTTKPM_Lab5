# Sử dụng image Node.js chính thức làm gốc
FROM node:18-alpine

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy file quản lý thư viện vào trước
COPY package*.json ./

# Cài đặt các thư viện
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Mở cổng 3000
EXPOSE 3000

# Lệnh khởi chạy ứng dụng
CMD ["node", "index.js"]