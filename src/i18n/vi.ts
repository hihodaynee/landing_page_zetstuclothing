export const vi = {
  // Common
  loading: "Đang tải...",
  error: "Có lỗi xảy ra",
  success: "Thành công",

  // Header / Navigation
  nav: {
    home: "TRANG CHỦ",
    products: "SẢN PHẨM",
    about: "VỀ CHÚNG TÔI",
    collection: "BỘ SƯU TẬP",
    contact: "LIÊN HỆ",
  },

  // Promo Card / Subscription
  promo: {
    registerNow: "ĐĂNG KÝ SỚM NHẬN",
    discount: "10% OFF",
    placeholder: "Nhập email của bạn...",
    button: "GỬI",
    tagline: "“Simply Street. Purely You.”",
    successMessage: "Đăng ký thành công!",
    successDescription:
      "Email sẽ đến trong vòng 1 phút nữa, vui lòng điền thêm thông tin để hoàn tất.",
    errorMessage: "Lỗi kết nối server",
    invalidEmail: "Email không đúng định dạng",
    alreadySubscribed: "Email này đã đăng ký rồi",
    alreadySubscribedTitle: "Email đã được sử dụng!",
    alreadySubscribedDescription:
      "Bạn đã đăng ký trước đó rồi. Nếu không thấy email xác nhận, hãy thử tìm kiếm 'zetstuclothing' trong thanh công cụ của hòm thư nhé!",
    subscriberCount: "Đã có {count}/100 người đăng ký",
    close: "Đóng",
  },

  // Footer
  footer: {
    aboutTitle: "VỀ CHÚNG TÔI",
    aboutText:
      "Chúng tôi thiết kế và sản xuất các sản phẩm chất lượng cao nhất để mang lại sự thoải mái và phong cách cho cộng đồng gym, lifestyle và streetwear.",
    brand: "THƯƠNG HIỆU",
    help: "TRỢ GIÚP",
    newsletter: "BẢN TIN",
    newsletterText:
      "Đăng ký để nhận thông tin về các bộ sưu tập mới nhất và ưu đãi độc quyền.",
    rights: "Tất cả các quyền được bảo lưu.",
  },

  // Countdown
  countdown: {
    days: "NGÀY",
    hours: "GIỜ",
    minutes: "PHÚT",
    seconds: "GIÂY",
    targetDate: "15/05/2026",
    startTime: "Tới 00:00",
  },
};

export type Translations = typeof vi;
