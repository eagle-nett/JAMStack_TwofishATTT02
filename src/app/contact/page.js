export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center p-5">
      <div className="flex justify-around flex-wrap gap-6 max-w-5xl">
        
        {/* Ô bên trái */}
        <div className="bg-black text-white p-6 rounded-lg shadow-lg max-w-sm w-full flex flex-col items-center ">
          <h2 className="text-2xl font-bold mb-4 text-center">Nhóm Trưởng</h2>
          <img
            src="/img/avt0.jpg"
            alt="Member 1"
            className="w-24 h-24 rounded-full border-4 border-white mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Lý Tiến Đạt</h2>
          <p><strong>Email:</strong> tiendat176mt@gmail.com</p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/eagle-nett" className="text-blue-400 hover:underline">
              litndat
            </a>
          </p>
        </div>

        {/* Ô ở giữa */}
        <div className="bg-black text-white p-6 rounded-lg shadow-lg max-w-sm w-full flex flex-col items-center transform transition-transform hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold mb-4 text-center">Thành Viên</h2>
          <img
            src="/img/avt.jpg"
            alt="Member 2"
            className="w-24 h-24 rounded-full border-4 border-white mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Lê Quốc Anh</h2>
          <p><strong>Email:</strong> 94quocanh1872003@gmail.com</p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/lequoca" className="text-blue-400 hover:underline">
              lqanh
            </a>
          </p>
        </div>

        {/* Ô bên phải */}
        <div className="bg-black text-white p-8 rounded-lg shadow-lg max-w-sm w-full flex flex-col items-center transform transition-transform hover:scale-105 duration-300">
          <h2 className="text-2xl font-bold mb-4 text-center">Thành Viên</h2>
          <img
            src="/img/avt1.jpg"
            alt="Member 3"
            className="w-24 h-24 rounded-full border-4 border-white mb-4"
          />
          <h2 className="text-xl font-bold mb-2">Nguyễn Đăng Khoa</h2>
          <p><strong>Email:</strong> xdangxkhoax@gmail.com</p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a href="https://github.com/nguyendangkhoa546289" className="text-blue-400 hover:underline">
              ndkhoa
            </a>
          </p>
        </div>
      </div>

      {/* Phần Google Map (nằm dưới cả ba thành viên) */}
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
    </div>
  );
}
