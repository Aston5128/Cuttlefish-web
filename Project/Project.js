function changeImg(n) {
	var img_id = "#img-" + n;  // 被选中图片 id
	var text_id = "#text-" + n;  // 被选中文字 id
	var tx_id = "#tx-" + n;
	$(img_id).siblings(".img").fadeOut('600');  // 图片的淡入淡出
	$(img_id).fadeIn('600');

	$(text_id).siblings(".text").css({  // 除被选中文字外其他文字隐藏，并且还原上外边为 60px
		display: 'none',
		marginTop: '60px'
	});

	$(text_id).css('display', 'block');  // 选中文字显示
	$(text_id).delay(400).animate({marginTop: "80px"}, 200);  // 文字下移效果，delay() 用于延时启动

	$(tx_id).siblings(".tx").css({  // 除被选中文字外其他文字隐藏，并且还原左外边为 60px
		opacity: '0',  // 这里的 opacity 属性设置透明度，值域 [0,1] 1代表完全不透明，0代表透明
		marginLeft: '350px'
	});

	$(tx_id).delay(620).animate({marginLeft: "300px", opacity: "1"}, 250);
}

$(document).ready(function() {
	$("#btn-1").click(function() { changeImg(0) });
	$("#btn-2").click(function() { changeImg(2) });
	$("#btn-3").click(function() { changeImg(3) });
	$("#btn-4").click(function() { changeImg(4) });
	$("#btn-5").click(function() { changeImg(5) });
	$("#btn-6").click(function() { changeImg(6) });
})
