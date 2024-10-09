export const getAttractionInfo = async (isRepresent: number, area?: string, id?: string, page: number = 1) => {
    const params = new URLSearchParams();

    // isRepresent는 항상 포함
    params.append('is_represent', isRepresent.toString());
    
    // area가 존재할 경우에만 추가
    if (area) {
        params.append('area', area);
    }

    // id가 존재할 경우에만 추가
    if (id) {
        params.append('id', id);
    }

    // page는 항상 포함
    params.append('page', page.toString());

    const url = `${import.meta.env.VITE_BE_URL}/tour?${params.toString()}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const errorText = await response.text(); // HTML 오류 페이지를 읽어봄
        console.error("Error response:", errorText);
        throw new Error(`네트워크 응답에 문제가 발생했습니다: ${response.status}`);
    }

    const data = await response.json();
    //console.log(data);
    return data;
};
