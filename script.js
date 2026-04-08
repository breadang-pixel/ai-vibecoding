function copyCode(button) {
    // 버튼 바로 다음 요소인 <pre> 태그의 텍스트를 가져옴
    const preTag = button.nextElementSibling;
    const textToCopy = preTag.innerText;

    // 클립보드에 복사
    navigator.clipboard.writeText(textToCopy).then(() => {
        // 원본 텍스트 백업
        const originalText = button.innerText;
        
        // 시각적 피드백
        button.innerText = '✅ 복사 완료';
        button.style.backgroundColor = '#10b981';
        button.style.color = 'white';
        button.style.borderColor = '#10b981';

        // 2초 후 원래대로 복구
        setTimeout(() => {
            button.innerText = originalText;
            button.style.backgroundColor = '';
            button.style.color = '';
            button.style.borderColor = '';
        }, 2000);
    }).catch(err => {
        alert('복사에 실패했습니다. 브라우저 설정을 확인해주세요.');
        console.error('Copy failed:', err);
    });
}