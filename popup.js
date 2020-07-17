// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let btn = document.getElementById('changeMessage');

const messages = [
  "Thích em, anh có thể bỏ đi tôn nghiêm, bỏ đi tính nóng, bỏ đi cá tính,... Chuyện duy nhất anh không thể bỏ xuống được là việc thích em.",
  "Đừng bao giờ nói với anh lời tạm biệt. Trong thế giới của anh và em, ngay cả việc nói với em: \n'Gặp sau nhé!', \n'Hẹn mai gặp!', \n' Cuối tuần gặp!',...\n Chỉ có vậy thôi anh đã không nỡ.",
  "Tình yêu của anh giống như một hạt mầm vậy, chỉ có gặp em mới nở thành những bông hoa đẹp nhất",
  "Chuyện đáng tiếc nhất trên đời này chính là để gặp được em, anh đã dùng hết tất cả may mắn của mình mất rồi nên chẳng thể còn thêm để khiến em thích anh được nữa.",
  "Vào ngày thứ 101 anh gặp được em, anh đã bắt đầu tính toán hướng em `Cầu hôn lần thứ 101`.",
  "Trước đây anh dùng lý trí để sống. Gặp được em rồi, bắt đầu dùng trái tim để sống.",
  "Bởi vì em yêu anh, thế nên anh không tin trên thế giới này còn có chàng trai nào khác may mắn như anh.",
  "Đời này, câu cuối cùng nói với em nhất định sẽ là: 'Gặp sau nhé!'",
  "Nghe bài hát em nghe, đọc cuốn sách em đọc, ngồi chỗ em từng ngồi, đến những cửa hàng em thường đến,... Biết đâu, bất chợt một ngày em sẽ nói với anh rằng: Anh và em giống nhau thật đấy!",
  "Khi đó anh cứ thế thích em, mà em lại chẳng hề hay biết!",
  "Nếu như em muốn từ chối anh thì xin em đừng từ chối tuyệt tình như thế. Bởi vì dù em có nói 'Em không có thích anh như vậy', anh cũng sẽ hiểu thành 'Em thích anh một chút!'.",
  "Mỗi lần trông thấy em, con tim anh lại run lên thổn thức. Mỗi lần tạm biệt em, anh vẫn luôn lưu luyến không rời.",
  "Em đời này có hai lựa chọn, hoặc là em gả cho anh, hoặc là anh lấy em.",
  "Không cần tin vào thần linh, tin anh là đủ rồi, thần linh cũng không yêu em như anh.",
  "Bởi vì không sao đâu, nên đừng nói với anh lời xin lỗi.",
  "Có ngu ngốc đến đâu cũng phải biết một chuyện, đó là yêu bà xã.",
  "Yêu em là tín ngưỡng cả đời của anh, thương em cũng là chấp niệm cả đời của anh.",
  "Em chỉ cần làm Hoàng tử nhỏ thôi, còn đội trời đạp đất cứ để anh lo.",
  "Có kiếp sau cũng muốn được thích em trước, dù máu có chảy, nước mắt có rơi, nhưng em không biết, thích em là một chuyện hạnh phúc đến nhường nào.",
];

document.getElementById('message').innerHTML = changeMessage();

btn.onclick = function() {
  document.getElementById('message').innerHTML = changeMessage();
};

function changeMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
