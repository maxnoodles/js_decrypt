import execjs

token = 'b5348844df6b4e0f91a54dc682dc4a3a'
true_distance = 200

trace_js_path = r'C:\Users\86137\OneDrive\桌面\js_study\JS逆向\滑块验证码js破解\my_trace.js'
with open(trace_js_path, 'r', encoding='utf-8') as f:
    trace_code = f.read()
trace_data, new_cb = execjs.compile(trace_code).call('my_trace', token, true_distance)
print(trace_data, new_cb)

{"d":"pFcyIsjqfWXr1hp2oJRQkTlHI7i/e48JsvNFvBz0t7bVLBqKExJ\\bjdBWPVb1BbupqVjCJSlQD4TfJrKhpVGbuEg2Mm9eNnzh7oB9J5UT7fwryq0/WAF9buPLYgc5xjvwl\\ycV4O6TkTJvMDVJ1Q/d8eylbIf7J+oJ9gsnlH9vucgE8I/c95PvtQC0hSkJmBSaejgHV4bm2TeNPVWZrlvaDl8LdTrEFBWYTt0NBuvy0F28\\\\/aMMbGCUe0G2aFG\\dXaqH2zqRVRdEZjeSBvnEKDPia0W5Xr5h7H+gR/oJnfk5g8\\zov5Au7MrJC2/E7xaT\\ofVOjrJ4ue1o1zKNGcsDjA+yrrdF0e26CKAspZR0MEaMOcnBHU4sBAXhrEaeGbTJE5+PNOIe0e49rgXVimTn\\BYU9rmTNh+MQ6sEgO5Z9jyPeGpRF0lee0TL/kbvXxdhUCd86ymKIkTjA7gk+075jJ9oaM7feVnvR/29OXxZrYyGEt7d2Ee50\\7fWsus1BodSzsn\\L4Ez/IRj1FnpTkoDLca94I9Q0R2pvbI4LJlajDhR0MTv/K5IQMiLOrpjrgWETNSqrWyb1JR/V4lEmwI0tl1SOGP\\KfCQ9Gz0OI52fJ/baZ\\QNjJMCXQ2l8eF8RnH8degZ\\yWf/YepOTv4sqla9FO4AMjQ4CQP88Q1F02Oq5TahfeEmUBpXxFLWaycEDMmBoELBS3","m":"","p":"9O60veVkDyDFPw2oKbMNcIAX1dshzyX\\cFhACMnJ0M2IA9fKXnAuGp33","ext":"v5EwlcOJ/Yio7k7nBA0BrY/uuXAYTqtM"} 
{"d":"uRwNfn9wl4S7AUm+0MY9r04IgiQ0ZHTX7fE86+TpDcZCv5QVTDXrClzH5nRKxQChQ/XPqaJodNgVBkA6/ba726Uel8NnvQdqPk4/nO0pgK9KUKTFQ/9sVzXt5228FsYhf\\9WDQotpGBwHDnl0yOZ/SsSpP8TCxw0JdL/WhDVHgdkLlE/Pkw/NYVP4X9/RsTXcLas6xMIlYswBlYp0MMwCOBppRfMPeRL2vkOf2sSqykKpN+DXcM0yrAFDwy8XkEJd2E/8GmFxAan9lQZPkw/Km8iPVARRsu7TEArn+DIQhWtT6mFTJSdDhfIGJl0ZrU0xODmenQ2dznK4/5STfOduZeRdClfRBoFlVriI8/LIw7/2mrU\\Yai2uwjHbuaJhsd\\4VS9S7GGRxyR+ldTByS9sJiGPZnG++7ITGSxbLBziB02ASkVVXNJ8Dhix7TWnIJwLZSnhXWKigqyBz6b8v/FfdGxdb07QDkVLfwXI+GnMkhaK2qtbsZCUbE5n+VQ6ChtcA/dXXYHsYoQPJAVfJW/U/jigTlR0A+54RwsFBJngDtIlqRW4Fr2v1MSEpY\\Ag1wAAI26g7dNgHa2zoCBQObzHhdNLwpkkQp/sOVgmCd8+t\\sXJw0pP41ZGw6bQ1eWbpKA9dz+fdUGLFx/uC2TVSGwid1V2UdkqzEJc1uEGqlwabrWGXnCblmaOiXb90ZmSZFEcxLzs0pnwl8uv","m":"","p":"nJTgVl5TQTFrTS0OqMHcrPF5pjDsixvICyX\\Z1SZpitWzSO\\abUIvp33","ext":"hRG2weS1DBYM1wRbko6uIbRjBz2X0s7w"}