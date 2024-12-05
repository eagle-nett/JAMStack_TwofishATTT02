export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to Twofish Website</h1>
        <p className="text-lg mb-8">
          Nơi bạn khám phá giải thuật Twofish và các công nghệ tiên tiến.
        </p>
        <a
          href="/twofish"
          className="px-6 py-3 bg-purple-700 rounded-full font-semibold hover:bg-purple-800 transition"
        >
          Khám phá ngay
        </a>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Tính Năng Nổi Bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Bảo Mật Cao</h3>
              <p>Ứng dụng giải thuật Twofish đảm bảo an toàn dữ liệu tối ưu.
              Twofish được thiết kế để kháng lại nhiều kiểu tấn công như brute force, differential cryptanalysis (phân tích vi sai), và linear cryptanalysis (phân tích tuyến tính).
              </p>
              <img src="/img/hinh4.jpg"/>
            </div>
            <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Hiệu Suất Tốt</h3>
              <p>Chạy mượt mà, đáp ứng nhanh và tối ưu hóa hiệu năng.
              Twofish được tối ưu hóa để chạy nhanh trên cả phần cứng (hardware) và phần mềm (software), bao gồm cả những thiết bị có tài nguyên hạn chế như thiết bị IoT.
              </p>
              <img src="/img/hinh4.jpg"/>
            </div>
            <div className="text-center bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Thân Thiện Người Dùng</h3>
              <p>Giao diện đơn giản, dễ sử dụng cho mọi đối tượng.
              Twofish được xây dựng với một kiến trúc đơn giản, dễ tích hợp vào các ứng dụng bảo mật như phần mềm mã hóa, giao thức VPN, hoặc lưu trữ an toàn.
              </p>
              <img src="/img/hinh4.jpg"/>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">ABOUT US</h2>
          <p className="text-lg">
            Chúng tôi tập trung vào việc phát triển các ứng dụng bảo mật sử dụng
            giải thuật Twofish để bảo vệ dữ liệu của bạn.
            Tầm nhìn của chúng tôi sẽ đưa kiến thức về bảo mật, mã hóa đến gần hơn với cộng đồng thông qua việc cung cấp các công cụ và tài liệu hữu ích.
            Hơn thế nữa với Sứ mệnh hỗ trợ những người học, nhà phát triển, và chuyên gia bảo mật hiểu rõ hơn về thuật toán Twofish và cách áp dụng nó vào các hệ thống thực tế.
          </p>
        </div>
        <div className="flex justify-end">
          <img src="/img/hinh5.jpg" loading="lazy" alt="Image" className="w-100" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">CONTACT US</h2>
          <form className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="name">
                Tên của bạn
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Nhập tên của bạn"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Nhập email của bạn"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="message">
                Tin nhắn
              </label>
              <textarea
                id="message"
                className="w-full p-2 bg-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Nhập tin nhắn của bạn"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-purple-700 rounded font-semibold hover:bg-purple-800 transition"
            >
              Gửi tin nhắn
            </button>
          </form>
        </div>
      </section>
      
    {/* Phần Google Map */}
    <div className="mt-8 w-full bg-black p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-white">Vị trí của chúng tôi</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0673478727094!2d106.62609067462759!3d10.806153889344403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be27d8b4f4d%3A0x92dcba2950430867!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBUaMawxqFuZyBUUC4gSOG7kyBDaMOtIE1pbmggKEhVSVQp!5e0!3m2!1svi!2s!4v1733389809533!5m2!1svi!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-4">
        <p>&copy; 2024 Twofish Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
