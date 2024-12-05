export default function Information() {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-full mx-auto">
        <h2 className="text-3xl font-bold mb-5 text-gray-800">MÔ TẢ THUẬT TOÁN</h2>
        {/*<h2 className="text-2xl font-bold mb-5 text-gray-800">A. KHÁI NIỆM VÀ CẤU TRÚC CỦA THUẬT TOÁN MÃ HÓA TWOFISH</h2>
        <p className="text-xl text-gray-700 font-bold">1. Giới thiệu chung về Twofish</p>
        <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Twofish là một thuật toán mã hóa khối đối xứng được thiết kế để bảo vệ dữ liệu bằng cách chuyển đổi thông tin thành dạng không thể đọc được, chỉ có thể giải mã bởi những người sở hữu khóa bí mật.
        Được phát triển bởi Bruce Schneier và nhóm của ông, Twofish có thể sử dụng các khóa có độ dài 128, 192 hoặc 256 bit, mang đến sự linh hoạt cao trong việc chọn mức độ bảo mật.
        Mặc dù Twofish không được chọn làm tiêu chuẩn mã hóa AES (Advanced Encryption Standard), nhưng nó vẫn được đánh giá cao về độ an toàn, hiệu suất và tính linh hoạt. Twofish là một trong những thuật toán mã hóa mạnh mẽ được sử dụng trong nhiều ứng dụng bảo mật, chẳng hạn như phần mềm mã hóa TrueCrypt, để bảo vệ dữ liệu nhạy cảm trong các hệ thống lưu trữ.
        </p>
        
        <p className="text-xl text-gray-700 font-bold">2. Cấu trúc và Nguyên lý hoạt động của Twofish</p>
        <p className="text-xl text-gray-700 font-bold">&nbsp;&nbsp;&nbsp;&nbsp;2.1. Mạng Feistel trong Twofish</p>
        <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Twofish áp dụng cấu trúc mạng Feistel, một phương pháp phổ biến trong thiết kế các thuật toán mã hóa khối. Mạng Feistel chia khối dữ liệu thành hai nửa và qua mỗi vòng mã hóa, một nửa được xử lý qua một hàm F, kết quả sau đó được xored với nửa còn lại, và hai nửa này sẽ đổi chỗ cho vòng tiếp theo.
        Trong Twofish, mỗi vòng mã hóa sử dụng một khóa con được tạo ra từ khóa chính thông qua một hàm trộn khóa. Mỗi vòng mã hóa của Twofish sử dụng các kỹ thuật phức tạp như S-Box và ma trận MDS để bảo vệ dữ liệu và làm tăng độ khó trong việc phân tích mật mã. Thuật toán Twofish sử dụng tổng cộng 16 vòng mã hóa với các phép toán mã hóa được thực hiện trên các khối dữ liệu 128 bit.
        </p>
        <p className="text-xl text-gray-700 font-bold">&nbsp;&nbsp;&nbsp;&nbsp;2.2. Đặc điểm nổi bật trong cấu trúc Twofish</p>
        <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Khóa linh hoạt: Twofish hỗ trợ khóa có độ dài 128, 192 và 256 bit, giúp người dùng tùy chỉnh mức độ bảo mật theo yêu cầu.
        Mã hóa khối 128 bit: Twofish mã hóa dữ liệu theo từng khối 128 bit, giúp quá trình mã hóa nhanh chóng và hiệu quả.
        Tính bảo mật cao: Sử dụng các kỹ thuật mã hóa tiên tiến như S-Box, ma trận MDS và biến đổi giả Hadamard (PHT).
        </p>
        */}
          {/*<h2 className="text-2xl font-bold mb-5 text-gray-800">B. CÁC THÀNH PHẦN BẢO MẬT TRONG TWOFISH</h2> 
        <p className="text-xl text-gray-700 font-bold">1. S-Box (Hộp thay thế phi tuyến tính)</p>
        <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        S-Box là một thành phần quan trọng trong hầu hết các thuật toán mã hóa khối, bao gồm cả Twofish. Đây là một phép thay thế phi tuyến tính được điều khiển bởi một bảng tra cứu, dùng để thay đổi các giá trị trong dữ liệu. Trong Twofish, bốn S-Box 8x8 bit được sử dụng, được xây dựng từ hai hoán vị cố định và khóa. Các S-Box này làm tăng sự phức tạp của dữ liệu sau mã hóa, giúp chống lại các cuộc tấn công như tấn công chọn văn bản (chosen plaintext attacks) và tấn công chọn bản mã (chosen ciphertext attacks).
        </p>
        <p className="text-xl text-gray-700 font-bold">2. S-Box (Hộp thay thế phi tuyến tính)</p>
        <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Ma trận MDS là một phép ánh xạ tuyến tính từ các phần tử của trường tới các phần tử khác, đảm bảo rằng khoảng cách giữa bất kỳ hai vectơ riêng biệt nào luôn có ít nhất một số lượng phần tử khác nhau. Điều này giúp tăng cường tính bảo mật của thuật toán, vì nó đảm bảo rằng sự thay đổi của bất kỳ bit nào trong dữ liệu đầu vào cũng sẽ tạo ra sự thay đổi lớn trong dữ liệu đầu ra.
Trong Twofish, ma trận MDS 4x4 trên trường GF(2^8) được sử dụng để kết hợp các nửa khối dữ liệu, đảm bảo tính phân tán mạnh mẽ và khó đoán trong mỗi vòng mã hóa.

        </p>
        <p className="text-xl text-gray-700 font-bold">3. Biến đổi giả Hadamard (PHT)</p>
        <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Biến đổi giả Hadamard (PHT) là một phép toán trộn bit đơn giản nhưng hiệu quả. PHT giúp trộn các bit trong mỗi vòng mã hóa, làm tăng tính phức tạp của dữ liệu đã mã hóa và giúp tăng tốc quá trình mã hóa. Trong Twofish, PHT 32 bit được sử dụng để trộn các đầu ra từ các phép toán song song, có thể thực hiện rất nhanh trên các bộ vi xử lý hiện đại như Intel Pentium.
          </p>
          */}
           {/*<h2 className="text-2xl font-bold mb-5 text-gray-800">C. PHƯƠNG PHÁP MÃ HÓA TWOFISH</h2> 
          <p className="text-xl text-gray-700 font-bold">1. Khời tạo và phân bố khóa</p>
          <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Giai đoạn tạo khóa phát sinh ra 40 từ khóa mở rộng K0, …, K39 và bốn S–box phụ thuộc khóa để sử dụng trong hàm g. Thuật toán Twofish được xây dựng đối với chiều dài khóa N = 128, N = 192 và N = 256 bit. Các khóa có chiều dài bất kỳ ngắn hơn 256 có thể được biến đổi thành khóa 256 bit bằng cách điền các số 0 vào cho đến khi đủ chiều dài.
          <br></br>Ta định nghĩa k = N/64. Khóa M bao gồm 8k byte m0, ..., m8k–1. Các byte này
được biến đổi thành 2k từ 32 bit.
          </p>
          <div style={{ textAlign: 'center' }}><img src="/img/khoitaopbkhoa.jpg"  style={{ display: 'inline-block' }} ></img></div>
          <p className="text-gray-700">
          Sau đó biến đổi thành hai từ vector có chiều dài k 
          </p>
          <div style={{ textAlign: 'center' }}>
          <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Me = (M0, M2, …, M2k–2)
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mo = (M1, M3, …, M2k–1)

       </p>
          </div>
          <p className="text-gray-700">
       Một vector gồm k từ 32 bit thứ 3 cũng được suy ra từ khóa bằng cách lấy ra từng nhóm gồm 8 byte trong khóa, xem nhóm các byte này là một vector trên GF(28) và nhân vector này với ma trận 4×8 (thu được từ Reed–Solomon code). Sau đó mỗi kết quả 4 byte được xem như một từ 32 bit. Những từ này kết hợp lại tạo thành vector thứ ba.
          </p>
          <div style={{ textAlign: 'center' }}><img src="/img/rs.jpg"  style={{ display: 'inline-block' }} ></img></div>
          <div style={{ textAlign: 'center' }}><img src="/img/rs1.jpg"  style={{ display: 'inline-block' }} ></img></div>
          <p className="text-gray-700">
          với i = 0, …, k – 1 và S = (Sk–1, Sk–2, …, S0)
          </p>
          <p className="text-gray-700">
          Cần lưu ý rằng thứ tự các từ trong danh sách S bị đảo ngược. Đối với ma trận nhân  RS,  GF(28)  được  biểu  diễn  bằng  GF(2)[x]/w(x),  với w(x) = x8 + x6 + x3 + x2 + 1 là một đa thức tối giản bậc 8 trên GF(2). Phép ánh xạ giữa các giá trị byte và các phần tử của GF(28) thực hiện tương tự như đối với phép nhân ma trận MDS.
          </p>
          <p className="text-gray-700">
          Ma trận RS được định nghĩa như sau:
          </p>
          <div style={{ textAlign: 'center' }}><img src="/img/MatranRS.jpg"  style={{ display: 'inline-block' }} ></img></div>
          <p className="text-xl text-gray-700 font-bold">2. Mở rộng đối với các chiều dài khóa</p>
          <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Twofish chấp nhận bất kỳ chiều dài khóa lên đến 256 bit. Đối với kích thước khóa không xác định (khác 128, 192, 256), các khóa này được thêm vào các số 0 cho đủ chiều dài xác định. Ví dụ: một khóa 80 bit m0, ..., m9 sẽ mở rộng bằng các đặt mi = 0 với i = 10, ..., 15 và xem nó như khóa 128 bit.
          <br></br>
          Hàm h đưa hai dữ liệu vào, một là từ 32 bit X và một là danh sách L = (L0, ..., Lk–1) của các từ 32 bit, kết quả trả ra là một từ. Hàm này thực hiện k giai đoạn. Trong mỗi giai đoạn, 4 byte, mỗi byte thực hiện qua một S–box cố định và XOR với một byte trong danh sách. Cuối cùng, một lần nữa các byte này lại được thực hiện qua một S–box cố định và 4 byte nhân với ma trận MDS như trong hàm g. Đúng hơn, ta chia các từ thành các byte
          </p>
          <div style={{ textAlign: 'center' }}><img src="/img/ctmrkhoa.jpg"  style={{ display: 'inline-block' }} ></img></div>
          <p className="text-gray-700">
          với i = 0, ..., k – 1 và j = 0, ..., 3. Sau đó lần lượt thay thế và áp dụng phép XOR.
          </p>
          <div style={{ textAlign: 'center' }}>
          <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          yk , j = xj , j = 0,..., 3

       </p>
          </div>
          <p className="text-gray-700">
          Nếu k = 4, ta có:
          </p>
          <div style={{ textAlign: 'center' }}><img src="/img/ctmrkhoa1.jpg"  style={{ display: 'inline-block' }} ></img></div>
          <div style={{ textAlign: 'center' }}><img src="/img/hamH.jpg"  style={{ display: 'inline-block' }} ></img></div>
          <div style={{ textAlign: 'center' }}>
          <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Hàm H
       </p>
          </div>
          <p className="text-gray-700">
       Nếu k lớn hơn hoặc bằng 3, ta có:
          </p>
          <div style={{ textAlign: 'center' }}><img src="/img/klonhonhoacbang3.jpg"  style={{ display: 'inline-block' }} ></img></div>
          <p className="text-gray-700">
          Trong mọi trường hợp, ta có:
          </p>
          <div style={{ textAlign: 'center' }}><img src="/img/moitruonghop.jpg"  style={{ display: 'inline-block' }} ></img></div>
          <p className="text-xl text-gray-700 font-bold">3. S-box phụ thuộc khóa</p>
          <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Mỗi S-box được định nghĩa với 2, 3 hoặc 4 byte của dữ liệu đầu vào của khóa tùy thuộc vào kích thước khóa. Điều này thực hiện như sau cho các khóa 128 bit:
          </p>
          <div style={{ textAlign: 'center' }}><img src="/img/sboxphuthuockhoa.jpg"  style={{ display: 'inline-block' }} ></img></div>
          <div style={{ textAlign: 'center' }}><img src="/img/mohinhphatsinhsbox.jpg"  style={{ display: 'inline-block' }} ></img></div>
          <div style={{ textAlign: 'center' }}>
          <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Mô hình phát sinh các s-box phụ thuộc khóa

       </p>
          </div>
          <p className="text-gray-700">
          Ở đây si, j là các byte lấy từ các byte khóa sử dụng ma trận RS. Để ý rằng với các byte khóa bằng nhau sẽ không có cặp S–box bằng nhau. Khi mọi si, j = 0 thì s0(x) = q1 [s1 –1(x)].
          <br></br>
          Đối với khóa 128 bit, mỗi khóa N/8 bit dùng để xác định các kết quả hoán vị 1 byte trong một phép hoán vị riêng biệt. Ví dụ: trường hợp khóa 128 bit, S–box s0 sử dụng 16 bit của key material. Mỗi phép hoán vị s0 trong 216 phép hoán vị được xác định riêng biệt, với s1, s2, s3 cũng giống vậy.
          </p>
          <p className="text-xl text-gray-700 font-bold">4. Các phép hoán vị q0 và q1</p>
          <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Các phép hoán vị q0 và q1 là các phép hoán vị cố định trên các giá trị 8 bit. Chúng được xây dựng từ 4 phép hoán vị 4 bit khác nhau. Đối với giá trị dữ liệu vào x, ta xác định được giá trị dữ liệu ra y tương ứng như sau:
          </p>
          <div style={{ textAlign: 'center' }}><img src="/img/phephoanviq0q1.jpg"  style={{ display: 'inline-block' }} ></img></div>
          <p className="text-gray-700">
          Ở đây ROR4 là hàm quay phải các giá trị 4 bit. Trước tiên, 1 byte được chia thành hai nhóm gồm 4 bit. Hai nhóm 4 bit này được kết hợp vào trong một bước trộn objective. Sau đó, mỗi 4 bit thực hiện thông qua S–box 4 bit cố định của chính nó . Tiếp theo tương tự. Cuối cùng, hai 4 bit tái kết hợp lại thành 1 byte. Đối với phép hoán vị q0, các S–box 4 bit được cho như sau:
          </p>
          <div style={{ textAlign: 'center' }}><img src="/img/sboxq0.jpg"  style={{ display: 'inline-block' }} ></img></div>
          <p className="text-gray-700">
          Ở đây mỗi S–box 4 bit được mô tả bằng một danh sách các mục sử dụng ký hiệu hexa (các mục của dữ liệu vào là danh sách có thứ tự từ 0, 1, ..., 15). Tương tự, đối với q1 các S–box 4 bit được cho như sau:
          </p>
          <div style={{ textAlign: 'center' }}><img src="/img/sboxq1.jpg"  style={{ display: 'inline-block' }} ></img></div>
          <div style={{ textAlign: 'center' }}><img src="/img/motaphephoanviq.jpg"  style={{ display: 'inline-block' }} ></img></div>
          <div style={{ textAlign: 'center' }}>
          <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           Ảnh mô tả phép hoán vị q

       </p>
          </div>
          */}
          <h2 className="text-2xl font-bold mb-5 text-gray-800">QUY TRÌNH MÃ HÓA VÀ GIẢI MÃ TRONG TWOFISH</h2>
          <p className="text-xl text-gray-700 font-bold">1. Quy trình Mã hóa trong Twofish</p>
          <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Twofish là một thuật toán mã hóa khối (block cipher) với kích thước khối cố định là 128 bit và khóa chính có thể có độ dài 128, 192, hoặc 256 bit. Thuật toán này sử dụng cấu trúc tựa Feistel gồm 16 vòng mã hóa, được thiết kế để đảm bảo tính bảo mật cao và hiệu suất tốt trên cả phần cứng lẫn phần mềm.
          </p>
          <div style={{ textAlign: 'center' }}><img src="/img/cautrucmahoa.jpg"  style={{ display: 'inline-block' }} ></img></div>
          <div style={{ textAlign: 'center' }}>
          <p className="text-gray-700">&nbsp;&nbsp;
           Cấu trúc mã hóa

       </p>
          </div>
          <p className="text-xl text-gray-700 font-bold">&nbsp;&nbsp;&nbsp;&nbsp;1.1. Thông tin cần mã hóa</p>
          <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Twofish mã hóa dữ liệu theo từng khối 128 bit (16 byte), gọi là khối dữ liệu. Khối dữ liệu này được chia thành 4 phần và chuyển đổi sang dạng HEX:
          <br></br>
          A,B,C,D (mỗi phần 32 bit).
          <br></br>
          Khóa chính cũng được chia thành 4 phần:
          <br></br>
          K0,K1,K2,K3
          <br></br>
          Dữ liệu đầu vào được XOR với khóa con (A,B,C,D) ⊕ (K0,K1,K2,K3) trước khi được đưa vào quá trình mã hóa. Mục tiêu của bước này là tăng cường độ phức tạp và toàn bộ thuật toán.
          <br></br>
          Quá trình mã hóa sẽ diễn ra trên từng cặp này qua 16 vòng mã hóa, mỗi vòng sử dụng một khóa con khác nhau.
          </p>
          <p className="text-gray-700" style={{textAlign: 'center'}}><img src="/img/hex.jpg"  style={{ display: 'inline-block'}} ></img> <br></br>Bảng mã ASCII</p>
          <p className="text-gray-700 font-bold">

          </p>
       <p className="text-xl text-gray-700 font-bold">&nbsp;&nbsp;&nbsp;&nbsp;1.2. Quá trình mã hóa chính (16 vòng)</p>
       <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       Mỗi vòng:
      Dữ liệu được xử lý qua các khối sau:
          </p>
          <p className="text-x text-gray-700 font-bold">a) Hàm F:</p>
          <p className="text-gray-700">
          Nửa trái (L) của khối dữ liệu được đưa vào hàm F để thực hiện các phép toán phi tuyến tính và trộn dữ liệu. Quy trình trong hàm F bao gồm:
          <br></br>
•	Chia nhỏ nửa trái L: Nửa trái L (64 bit) được chia thành 4 từ con, mỗi từ 32 bit: L0,L1,L2 ,L3.
<br></br>
•	Kết hợp với khóa con: Các từ này được kết hợp với các khóa con riêng biệt thông qua phép XOR hoặc phép cộng modulo 232
<br></br>
•	Thay thế phi tuyến với S-Box: 
<br></br>
•	Kết quả của bước trên được đưa qua các S-Box (Substitution Box): S-Box tùy biến: Trong Twofish, các S-Box không cố định mà được tạo dựa trên khóa chính. Điều này đảm bảo rằng các S-Box là duy nhất cho mỗi bộ khóa chính, tăng khả năng kháng tấn công dựa trên mẫu.
<br></br>
•	Trộn tuyến tính với ma trận MDS (Maximum Distance Separable): Dữ liệu từ S-Box được đưa qua ma trận MDS để thực hiện trộn bit tuyến tính. MDS đảm bảo phân tán dữ liệu, một thay đổi nhỏ ở đầu vào sẽ dẫn đến sự thay đổi lớn ở đầu ra.
<br></br>
•	Tạo kết quả cuối cùng: Kết quả sau khi qua S-Box và MDS được trả về như đầu ra của hàm F(L).
</p>
<p className="text-x text-gray-700 font-bold">b) S-Box:</p>
<p className="text-x text-gray-700 ">
          S-Box là một thành phần quan trọng trong hầu hết các thuật toán mã hóa khối, bao gồm cả Twofish. Đây là một phép thay thế phi tuyến tính được điều khiển bởi một bảng tra cứu, dùng để thay đổi các giá trị trong dữ liệu. Trong Twofish, bốn S-Box 8x8 bit được sử dụng, được xây dựng từ hai hoán vị cố định và khóa. 
          <br></br>
          S-boxes (S-box 0, S-box 1, S-box 2, S-box 3): Các hộp thay thế (Substitution Box) dùng để thay thế giá trị đầu vào thành đầu ra theo bảng nghiên cứu.</p>
          <p className="text-gray-700" style={{textAlign: 'center'}}><img src="/img/cautrucsbox.jpg"  style={{ display: 'inline-block'}} ></img> <br></br>Cấu trúc của S-box</p>
   
          <p className="text-gray-700">
          MDS (Maximum Distance Separable): Ma trận MDS 4x4 trên trường GF(2^8) được sử dụng để kết hợp các nửa khối dữ liệu, đảm bảo tính phân tán mạnh mẽ và khó đoán trong mỗi vòng mã hóa.
          <br></br>
          Biến đổi giả Hadamard (PHT) là một phép toán trộn bit đơn giản nhưng hiệu quả. PHT giúp trộn các bit trong mỗi vòng mã hóa, làm tăng tính phức tạp của dữ liệu đã mã hóa và giúp tăng tốc quá trình mã hóa.

          </p>
          
          <p className="text-x text-gray-700 font-bold"> c) XOR với nửa phải:</p>
          <p className="text-gray-700">
          Kết quả từ hàm F sẽ được XOR với nửa phải (R) của khối dữ liệu. Sau khi XOR, nửa trái và nửa phải của dữ liệu sẽ hoán đổi cho nhau. Chính sự hoán đổi này là đặc trưng của cấu trúc mạng Feistel, giúp tăng tính bảo mật.

          </p>
          <p className="text-x text-gray-700 font-bold"> d) Hoán đổi nửa trái và nửa phải</p>
          <p className="text-gray-700">
          Sau khi kết thúc một vòng mã hóa, nửa trái và nửa phải của khối dữ liệu sẽ hoán đổi cho nhau, chuẩn bị cho vòng mã hóa tiếp theo. Quá trình này đảm bảo rằng cả hai phần của khối dữ liệu đều được mã hóa và thay đổi qua từng vòng. Ở vòng mã hóa cuối cùng, bước hoán đổi này sẽ không được thực hiện, đảm bảo cấu trúc dữ liệu đúng khi kết thúc vòng mã hóa.

          </p>
          <p className="text-x text-gray-700 font-bold"> e) Làm trắng đầu ra </p>
          <p className="text-gray-700">
          Trước khi xuất dữ liệu mã hóa ra ngoài, thuật toán thực hiện một bước Output White.
          </p>
          <p className="text-x text-gray-700 font-bold"> f) Thông tin đã được mã hóa </p>
          <p className="text-gray-700">
          Kết quả cuối cùng là khối dữ liệu mã hóa 128 bit, bao gồm 4 phần A′,B′,C′,D′
          </p>
         
          {/* 
          <p className="text-xl text-gray-700 font-bold">&nbsp;&nbsp;&nbsp;&nbsp;1.3. Quy trình Mã hóa của các vòng</p>
          <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Quá trình mã hóa thực hiện qua 16 vòng (hoặc chu kỳ). Mỗi vòng gồm các bước sau:
          </p>
          <p className="text-x text-gray-700 font-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.3. Vòng mã hóa</p>
          <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Quá trình mã hóa thực hiện qua 16 vòng (hoặc chu kỳ). Mỗi vòng gồm các bước sau:
          </p>
          <p className="text-gray-700 font-bold">
          Hàm F
          </p>
          <p className="text-gray-700">
          Nửa trái (L) của khối dữ liệu được đưa vào hàm F để thực hiện các phép toán phi tuyến tính và trộn dữ liệu. Quy trình trong hàm F bao gồm:
          <br></br>
          •	Chia nhỏ nửa trái L: Nửa trái L (64 bit) được chia thành 4 từ con, mỗi từ 32 bit: L0,L1,L2 ,L3.
          <br></br>
          •	Kết hợp với khóa con: Các từ này được kết hợp với các khóa con riêng biệt thông qua phép XOR hoặc phép cộng modulo 232
          <br></br>
          •	Thay thế phi tuyến với S-Box: 
          <br></br>
          •	Kết quả của bước trên được đưa qua các S-Box (Substitution Box): S-Box tùy biến: Trong Twofish, các S-Box không cố định mà được tạo dựa trên khóa chính. Điều này đảm bảo rằng các S-Box là duy nhất cho mỗi bộ khóa chính, tăng khả năng kháng tấn công dựa trên mẫu.
          <br></br>
          •	Trộn tuyến tính với ma trận MDS (Maximum Distance Separable): Dữ liệu từ S-Box được đưa qua ma trận MDS để thực hiện trộn bit tuyến tính. MDS đảm bảo phân tán dữ liệu, một thay đổi nhỏ ở đầu vào sẽ dẫn đến sự thay đổi lớn ở đầu ra
          <br></br>
          •	Tạo kết quả cuối cùng: Kết quả sau khi qua S-Box và MDS được trả về như đầu ra của hàm F(L).
          </p>
          <p className="text-gray-700 font-bold">
          XOR với Nửa Phải
          </p>
          <p className="text-gray-700">
          Kết quả từ hàm F sẽ được XOR với nửa phải (R) của khối dữ liệu. Sau khi XOR, nửa trái và nửa phải của dữ liệu sẽ hoán đổi cho nhau. Chính sự hoán đổi này là đặc trưng của cấu trúc mạng Feistel, giúp tăng tính bảo mật.
          </p>
          <p className="text-gray-700 font-bold">
          Hoán đổi nửa trái và nửa phải
          </p>
          <p className="text-gray-700">
          Sau khi kết thúc một vòng mã hóa, nửa trái và nửa phải của khối dữ liệu sẽ hoán đổi cho nhau, chuẩn bị cho vòng mã hóa tiếp theo. Quá trình này đảm bảo rằng cả hai phần của khối dữ liệu đều được mã hóa và thay đổi qua từng vòng. Ở vòng mã hóa cuối cùng, bước hoán đổi này sẽ không được thực hiện, đảm bảo cấu trúc dữ liệu đúng khi kết thúc vòng mã hóa.
          </p>
          <p className="text-gray-700 font-bold">
          Kết hợp với key schedule
          </p>
          <p className="text-gray-700">
          •	Khóa con: Mỗi vòng sử dụng một khóa con khác nhau, được sinh ra từ quá trình Key Schedule.
          <br></br>
          •	Key Schedule: Các khóa con được tạo ra thông qua các phép toán tuyến tính (như XOR) và phi tuyến tính (như PHT và S-Box) từ khóa chính.
          <br></br>
          •	Tính duy nhất: Khóa con trong từng vòng mã hóa đảm bảo rằng không có vòng nào sử dụng lại khóa, giúp tăng cường bảo mật và kháng các tấn công phân tích khóa.
          </p>
          <p className="text-gray-700 font-bold">
          XOR với Whitening key
          </p>
          <p className="text-gray-700">
          Twofish sử dụng Whitening Keys để tăng thêm một lớp bảo mật, thực hiện hai bước XOR như sau:
          <br></br>
          Trước vòng mã hóa đầu tiên:
          <br></br>
          o	Cả L và R được XOR với một cặp khóa whitening riêng biệt:
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;	L=L⊕Kpre-whitening-leftL 
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp; R=R⊕Kpre-whitening-rightR
          <br></br>
          Sau vòng mã hóa cuối cùng:
          <br></br>
          o	Kết quả cuối cùng sau 16 vòng mã hóa cũng được XOR với một cặp khóa whitening khác để tạo bản mã (ciphertext):
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp; 	L=L⊕Kpost-whitening-leftL
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp; 	R=R⊕Kpost-whitening-rightR
          </p>
          <p className="text-xl text-gray-700 font-bold">&nbsp;&nbsp;&nbsp;&nbsp;1.4. Tổng quan quy trình mã hóa trong Twofish</p>
          <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Quá trình mã hóa trong Twofish có thể được mô tả theo các bước chính sau:
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
          1.	Khởi tạo: Chia dữ liệu đầu vào thành hai nửa 64 bit (L và R).
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
          2.	Khóa con: Tạo các khóa con từ khóa chính qua một quá trình gọi là Key Schedule.
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          3.	Vòng mã hóa: Thực hiện 16 vòng mã hóa, trong đó mỗi vòng sử dụng một khóa con khác nhau và thực hiện các phép toán thay thế, XOR, và hoán đổi giữa các nửa dữ liệu.
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          4.	Kết thúc mã hóa: Sau vòng mã hóa cuối, áp dụng khóa whitening để tạo bản mã cuối cùng.
          <br></br>
          Mạng Feistel và việc sử dụng các kỹ thuật như S-Box, ma trận MDS và PHT giúp Twofish có tính bảo mật cao và khả năng chống lại các tấn công mật mã hiện đại. Quá trình mã hóa này đảm bảo rằng dữ liệu không thể dễ dàng bị giải mã mà không có khóa chính đúng.
          </p>
          */}
          <p className="text-xl text-gray-700 font-bold">&nbsp;&nbsp;&nbsp;&nbsp;1.3. Tổng quan quy trình giải mã trong Twofish</p>
          <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Quy trình mã hóa và giải mã của thuật toán Twofish tương tự như nhau.
          <br></br>
          Tuy nhiên, quy trình giải mã các khóa vòng sẽ được sử dụng theo thứ tự ngược lại trong cấu trúc mã hóa.
          </p>
          
          <div style={{ textAlign: 'center' }}><img src="/img/sosanhmahoagiaima.jpg"  style={{ display: 'inline-block' }} ></img></div>
          <div style={{ textAlign: 'center' }}>
          <p className="text-gray-700">&nbsp;&nbsp;
          So sánh quy trình mã hóa (a) và giải mã (b)

       </p>
       <p className="text-gray-700">
       Vì mã hóa Twofish là một hàm đối xứng, nghĩa là khóa mã hóa và giải mã là giống nhau, nhưng thứ tự sử dụng các khóa vòng sẽ được đảo ngược trong quá trình giải mã.
          </p>
          </div>
          
          <p className="text-xl text-gray-700 font-bold">2. Ưu điểm và Nhược điểm của Twofish</p>
          <p className="text-gray-700 font-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       Ưu điểm:
          </p>
          <p className="text-gray-700">
          Tính bảo mật cao: Sử dụng nhiều kỹ thuật mã hóa tiên tiến như S-Box, ma trận MDS, và PHT giúp tăng cường bảo mật.
          <br></br>
          Khóa linh hoạt: Hỗ trợ các độ dài khóa khác nhau (128, 192 và 256 bit), giúp người dùng tùy chọn mức độ bảo mật theo yêu cầu.
          <br></br>
          Hiệu suất cao trong phần mềm: Twofish được tối ưu để thực thi nhanh chóng trong phần mềm, đặc biệt trên các bộ vi xử lý hiện đại.
          <br></br>
          Chống lại các tấn công: Các kỹ thuật sử dụng trong Twofish giúp bảo vệ thuật toán khỏi các tấn công như tấn công chọn văn bản, tấn công phân tích mật mã, và tấn công các khoá.
          </p>
          <p className="text-gray-700 font-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       Nhược điểm:
          </p>
          <p className="text-gray-700">
          Không được chọn làm AES: Mặc dù Twofish là một thuật toán mã hóa mạnh mẽ, nó không được chọn làm tiêu chuẩn AES, điều này hạn chế sự phổ biến và ứng dụng rộng rãi của thuật toán này.
          <br></br>
          Độ phức tạp: Việc sử dụng nhiều kỹ thuật mã hóa phức tạp có thể khiến thuật toán khó triển khai và tối ưu hóa trong một số môi trường phần cứng hoặc phần mềm, đặc biệt khi so với các thuật toán như AES.
          </p>
          <p className="text-xl text-gray-700 font-bold">3. Các ứng dụng và Tính linh hoạt của Twofish</p>
          <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Tính bảo mật cao: Sử dụng nhiều kỹ thuật mã hóa tiên tiến như S-Box, ma trận MDS, và PHT giúp tăng cường bảo mật.
          <br></br>
          Mã hóa phần mềm: Twofish là một lựa chọn phổ biến trong các ứng dụng phần mềm mã hóa, chẳng hạn như phần mềm bảo mật TrueCrypt và VeraCrypt, để bảo vệ dữ liệu nhạy cảm trên các thiết bị lưu trữ.
          <br></br>
          Mã hóa trong các hệ thống nhúng: Nhờ vào cấu trúc mã hóa hiệu quả và tối ưu trong phần mềm, Twofish có thể được triển khai trong các hệ thống nhúng hoặc trên các thiết bị có tài nguyên hạn chế.
          <br></br>
          Bảo mật dữ liệu trên mạng: Twofish có thể được ứng dụng trong các giao thức bảo mật mạng như IPsec, SSL/TLS, để bảo vệ thông tin truyền qua các kênh giao tiếp không an toàn.
          </p>
          <p className="text-xl text-gray-700 font-bold">4. Hiệu suất và tối ưu hóa</p>
          <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Twofish được thiết kế để có thể triển khai hiệu quả cả trên phần cứng và phần mềm:
          <br></br>
          Trên phần cứng: Dù không được tối ưu như AES, Twofish vẫn có thể được triển khai trên phần cứng với hiệu suất cao, đặc biệt là trong các ứng dụng nhúng hoặc các hệ thống có tài nguyên hạn chế.
          <br></br>
          Trên phần mềm: Twofish được tối ưu cho phần mềm, đặc biệt với việc sử dụng PHT để trộn các bit và tính năng có thể thực thi nhanh chóng trên các bộ vi xử lý hiện đại như Intel Pentium.
          </p>
          {/* 
          <p className="text-xl text-gray-700 font-bold">5. Ví dụ minh họa về thuật toán Twofish</p>
          <p className="text-gray-700 font-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Mã hóa một đoạn văn bản rõ (plaintext) thành bản mã (ciphertext) sử dụng khóa và sau đó giải mã để thu lại văn bản ban đầu:
          </p>
          <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Mã hóa đoạn văn bản "ABCDEFGH12345678" sử dụng thuật toán Twofish với khóa có độ dài 128 bit.
          <br></br>
          Thông tin đầu vào:
          <br></br>
          Văn bản rõ (Plaintext): "ABCDEFGH12345678"
          <br></br>
          Khóa (Key): "KeyExample123456"
          <br></br>
          Chúng ta cần mã hóa văn bản "ABCDEFGH12345678" thành chuỗi không đọc được và sau đó giải mã lại để thu về văn bản ban đầu.
          </p>
          <p className="text-gray-700 font-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Bước 1: Chuyển đổi dữ liệu đầu vào:
          </p>
          <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Đầu tiên, cần phải chuyển văn bản rõ "ABCDEFGH12345678" thành dạng thập lục phân (hex). Văn bản được chuyển đổi từ ASCII hoặc Unicode sang Hex, và sau đó mỗi ký tự được biểu diễn thành chuỗi nhị phân.
          </p>
         
          <p className="text-gray-700">
            
          ABCD: Ox41424344 (A)
          <br></br>
          EFGH: Ox45464748 (B)
          <br></br>
          1234: Ox31323334 (C)
          <br></br>
          5678: Ox35363738 (D)
          <br></br>
          Như vậy, bản rõ dạng Hex là: Ox41424344 Ox45464748 Ox31323334 Ox35363738
          <br></br>
          </p>
          <p className="text-gray-700 font-bold">
          Đổi khóa sang dạng Hex:
          </p>
          <p className="text-gray-700">
          KeyE: Ox4B657945 (K0)
          <br></br>
          Xamp: Ox78616D70 (K1)
          <br></br>
          le12: Ox6C653132 (K2)
          <br></br>
          3456: Ox33343536 (K3)
          <br></br>
          Như vậy, khóa dạng Hex là: Ox4B657945 Ox78616D70 Ox6C653132 Ox33343536
          </p>
          <p className="text-gray-700 font-bold">
          Thực hiện XOR plaintext và key
          </p>
          <p className="text-gray-700">
            Thực hiện phép XOR lần lượt giữa các khối dữ liệu đã được chuyển đổi (A ⊕ K0), (B ⊕ K1), (C ⊕ K2), (D ⊕ K3)
          </p>

          <p className="text-gray-700 font-bold">
          (A ⊕ K0)
          </p>
          <p className="text-gray-700">
          Ox41424344: 0100 0001 0100 0010 0100 0011 0100 0100
          <br></br>
          Ox4B657945: 0100 1011 0110 0101 0111 1001 0100 0101
          <br></br>
          Kết quả:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0000 1010 0010 0111 0011 1010 0000 0001 (Ox0A273A01) (A')
          </p>
          <p className="text-gray-700 font-bold">
          (B ⊕ K1)
          </p>
          <p className="text-gray-700">
          Ox45464748: 0100 0101 0100 0110 0100 0111 0100 1000
          <br></br>
          Ox78616D70: 0111 1000 0110 0001 0110 1101 0111 0000
          <br></br>
          Kết quả:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0011 1101 0010 0111 0010 1010 0011 1000 (Ox3D272A38) (B')
          </p>
          <p className="text-gray-700 font-bold">
          (C ⊕ K2)
          </p>
          <p className="text-gray-700">
          Ox31323334: 0011 0001 0011 0010 0011 0011 0011 0100
          <br></br>
          Ox6C653132: 0110 1100 0110 0101 0011 0001 0011 0010
          <br></br>
          Kết quả:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0101 1101 0101 0111 0000 0010 0000 0110 (Ox5D570206) (C')
          </p>
          <p className="text-gray-700 font-bold">
          (D ⊕ K3)
          </p>
          <p className="text-gray-700">
          Ox35363738: 0011 0101 0011 0110 0011 0111 0011 1000
          <br></br>
          Ox33343536: 0011 0011 0011 0100 0011 0101 0011 0110
          <br></br>
          Kết quả:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0000 0110 0000 0010 0000 0010 0000 1110 (Ox0602020E) (D')
          </p>

          <p className="text-gray-700 font-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Bước 2: Áp dụng thuật toán Twofish:
          </p>
          <p className="text-gray-700" style={{textAlign: 'center'}}><img src="/img/sodo.jpg"  style={{ display: 'inline-block'}} ></img> <br></br>Sơ đồ tóm gọn quy trình mã hóa</p>

          <p className="text-gray-700">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Twofish sẽ chia đoạn dữ liệu thành các khối 128 bit. Do văn bản "HELLO" ngắn hơn 128 bit, ta sẽ cần phải thêm padding (đệm) để khối dữ liệu có độ dài đúng 128 bit. Các padding này sẽ được thêm vào một cách có quy tắc (thường là các byte có giá trị bằng số byte đệm cần thêm).
          <br></br>
          Sau đó, thuật toán Twofish sử dụng cấu trúc Feistel để mã hóa mỗi khối dữ liệu thông qua 16 vòng lặp (rounds), mỗi vòng sẽ thực hiện các phép thế (substitution) và trộn khóa (key mixing) với khóa con (subkey) được sinh ra từ khóa chính.
          </p>

    <p className="text-gray-700">
            Sau bước làm trắng đầu vào (XOR), dữ liệu sẽ được chia thành 4 khối và đi qua các S-BOX
          </p>
          */}
      </div>
      
    );
  
  }
  