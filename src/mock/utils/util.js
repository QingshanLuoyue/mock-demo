export const formatMockData = (
    mockData = {},
    codeStatus = 0,
    message = '@cword(1,10)',
    customData
) => {
    if (customData) return customData
    let initFormatObj = {
        code: codeStatus,
        result: mockData,
        message: message
    }
    return initFormatObj
}

// 组合数据
export const comp = function(value) {
    return [null, '', value]
}
