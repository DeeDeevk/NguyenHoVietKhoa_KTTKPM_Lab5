# Sử dụng image Python phiên bản nhẹ
FROM python:3.9-alpine

# Thiết lập thư mục làm việc
WORKDIR /app

# Cài đặt các công cụ cần thiết để build (nếu có thư viện nặng)
RUN apk add --no-cache gcc musl-dev linux-headers

# Copy file requirements và cài đặt thư viện
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy toàn bộ mã nguồn vào container
COPY . .

# Mở cổng 5000 (cổng mặc định của Flask)
EXPOSE 5000

# Lệnh khởi chạy ứng dụng
CMD ["python", "app.py"]