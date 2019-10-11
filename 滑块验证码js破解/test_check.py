import requests

headers = {
    'Sec-Fetch-Mode': 'no-cors',
    'Referer': 'https://dl.reg.163.com/webzj/v1.0.1/pub/index2_new.html?cd=https%3A%2F%2Fcc.res.netease.com%2F_next%2F_static%2Fstatic%2Fstyles%2F&cf=urs_component.css%3Fversion%3D20190904&MGID=1570693604700.7615&wdaId=&pkid=PFClpTB&product=cc',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36',
}

params = (
    ('id', '744e2a6324ec5370616241baf4507538'),
    # ('token', 'e049fd756028497482221a05f51eadbd'),
    ('token', 'fafb343978844992bdb504f635a103cb'),
    # ('data', '{"d":"8449cquwvswxRBwakTeQTPHrH28EkDg//2R5TzOqH2GcAagmkaWpD5IkwzREXQSxZaHmuwfP9w8vblDTtXbb0hvpFafVf/oOWPMzwj1kgFmV/XN9mxdhST5EzNq2ZMVYNqHiPJydMo9kFMnofQt\\\\ut8sgZTGxtkQEHFXiXdFeuFva4vXXvMRiiaVabGv6Hm/GiTbUDQnzFZFPeoO2mnUwjI2Ram5SGp9mN9z0TEAxgX2PkXZzLd0gMHOtA7hkItn/pJD7r7AqrYIp6o6UcUP6nRSHnv0c8i/lIiUsO\\\\LnAUUqZCdpQ02T6RTlNmgfgq\\\\pBs71iRvCwF0XwUNWMkRTxEk+vEHeIWTInPClJ\\\\tr8LqiPV/lP2owY+TbTEypLDsgpb/SMNMpyAHHFFidQjCGOM49YOxRBcr/EK2iijaPV2541axyWTfPGR22X94ASZuAaWpCINzCaUQ+hkUNDTmiYCk/BbESRS9/nCHhvYp2\\\\EG\\\\IANfAbI0RvFaiA8NrpRIPAz1/ohMDITxZ98/\\\\h/7rz+XeGAVQZirGezSC1bLor27zjxwSleB2jQCtAfttsYOy\\\\HgAGnfE1RS9boLjHjCpWA9cGOZ/tf0/qKix7TnDFgTf4Xpf/6kSJ/fn6U2GkAPHc67HditA8BzXlJsni6yUsqVB+dKDN\\\\anoyr0Fe4G7kCtmLIR\\\\\\\\/4oNFNNjKZnCz44qGc\\\\gHqwxbg2FTWk9ufQkTcoYdU2zbzx07P\\\\qaphVx1m7CStVKZiJ5S410fhlfISR0rzCOcA0AaXR/QgznV9DHO5ERWhd0U7D7r7UAHhAoQZ9mAJTSlhSgT6DciSiHVVHG8\\\\8FC8axdfAsn4T0aicTMIVGQi9m/\\\\Y1iRxD/LxS\\\\ZL/PV/0PoxsMXj/gq4pSi6/Z5tVi1Tt7lRLluDO/SZBpiThr+aJDp6FB9aVt/0NuNHqP\\\\CCPaJpe5cjYzN/QvX0I8TxfXgHjL2CNvRP\\\\H2mIjRjUAKYXgGilWJw2fMCd2mzR607OeqapSYuMm7OoXFKwFC/qfa8tCl/j9D02HjKcerKEqRCMWKi1tDD199UIVPfF\\\\/7RvJMKB1omp9nABVfL0SwrOqVwqi88DGGk97D8xftEbhOmog06Rq04ijQgToOVP4CR6pEd5iXZ+L0CdULF7wxSNa26wbNdXWXnI\\\\wX/rqQxXgnPgWls/slc3","m":"","p":"6rD69Vb7ZKmThiONdndkcPHhso5J1D1A+BWqElD2pf8YzN7CTQd/kp33","ext":"CmLrE/guyOZME1txfHtChDkYBUr0SVkc"}'),
    ('data', '{"d":"pipGeZGLP4+mOLsHqTdl9CJEQEla8Zfe80vO5lIsJAzh92bHGWlD14DiGx+ZQFHGVlAteWOLFDmAjuTrqLxerdRotgv/YtEPU2TfF6GjUfvZjGXtCOYTM+pRKQMg9L+fUPMOo9n7W5Vl8oMUu1Olfc0B\\\\0nYRR7Pxf0V9pohNgvW9gOMSYo6TpqD2KulWNHHhClGUCiFqjM2Wx8nEk4Dvq\\\\npzLlFaEnXvkpUmXFLp+KS5WBG4WiLBAHInSLZj/hGcfOfw5i\\\\vkbbL6HVhper4VZGCUaxAtj0\\\\nu6dqOdJdVxuPNSf9hMgiseECfZjEEBM4hryBI4CPSx6atIVp\\\\fWBnF115dsfj5uSu9UD5d4v/IAsCHkWXrZu\\\\heWZC8fIHVOwv6knztFPF7fUa48Z8xPPz4Nhp0d7D/wiMlmRLjoaVd9ff\\\\I249pHZtyShLaxEkwiHUlFIO/cUL\\\\jVJ0OMX0AhQjuVioHGwD4e4x7zEvT\\\\5vPi\\\\ITFqf8/g6TR9gPKTdfWxaN8EHT2VZ1XMibN87nFAl/YTbHt8OlNCSVQDfWT9CNGBKfy2sOFACWanzuGJ7K4kAbVgCWl1x+HoANrWPIuRn/\\\\toSGkyK9I0mnud2gEgIuTGv5UpI44+/q9UIhP1v9+pb44CSPJz0K\\\\E9DWOLC7VSjwFqKRmRvLO8fuVSby/nkoA0EMbIO9gZjtEO","m":"","p":"RhLEkI2LgNkiliq1l8P50U1dTNZS8to+lgKJEMDkzO/QqK+OuIwG2A33","ext":"H4ZkyTp7zVRrkvbER\\\\U42YHXbAZccO9O"}'),
    ('width', '220'),
    ('type', '2'),
    ('version', '2.11.4'),
    ('cb', 'CGPdOb1ih/BYh6eBYZdH7hmJafwSlNL58HKcx+u0GCSNVRFG/eGi8rJb\ejqVZWZ'),
    ('extraData', ''),
    ('runEnv', '10'),
    ('referer', 'https://dl.reg.163.com/webzj/v1.0.1/pub/index2_new.html'),
    ('callback', '__JSONP_hcgafux_5'),
)

# params = (
#     ('id', '744e2a6324ec5370616241baf4507538'),
#     ('token', '4728776608e64c12b1b8a7d1ca7cc9ba'),
#     # ('acToken', '9ca17ae2e6ffcda170e2e6eed6cb4eb49a8cd5f165979a8aa7c84e939b9a84f279b1af9d84d747f2bf8a87c42af0feaec3b92aafea9d8fb225e9b1e5d6c95a869a8eb2d85ea1e7fcd6f15dab9282acd34e9b9fee9e'),
#     ('data', '{"d":"bYWsYHm0rlrrjcuGXAdAdxvtgKgA/5nZ1\\\\LpXtNySaJYEsB4C98CgocneS/zjOBQE2TRG6fut49sa5u5HSDbuKzBAij4PnP9jiHEGf4yC2\\\\qCAts7+29JRh4wrX+vOHxJJ0Is5/BSWI+D9hi5v6AMifLLKuUf7KZiZBAqxFB\\\\Hm9FIlTtMLWq886X2Bi0Fg/HwRMcSvB\\\\GtEQmC9TJCrAUEBiFAW\\\\KGbcfhiinv+7i9A/Vr0QfFuBSiyVBkHEBHBeHr6pRv5FqkomYUV8H6a5pgGqFiWaF0N6SDZTOz06HX4cmjsj7jYtWSVtswPpwbTaJeaBhm1nUhgPyNhylL9Rj8Y7oEJvqv\\\\G4\\\\W95BjTm1T\\\\8/G7vp\\\\nfiqqXRHlqmrdr8kotBjJKqnX/2MHnVecz\\\\8NGqXVQOWQUHgv2o\\\\OPa0AhYmC6/JZq7gtKH\\\\TmBU2P5gg0i1otmXQdHTtmWTHiA0uq0M98yndcdg7Zwiwotq6UgDGRF5vpU2QUm+4zJ/5OwnWJ1VVs6bEpElcuHmmO21rCUkC6VSx4tiZPEVJLJTKUkOvKv4mtavtI0Bhm6Qn0s0c+c7oSwWo/Y4nTBPGBg7n7Xk/E8S/F8so1Ev1uUx4VYggS+pFuNLGswJ6LdO10aYQtCmGuXYDjPTKJekpukp9huD2WTij0SUTgf7ds6gYQ4s2rby9bm0Lsc0AWP6DU0x+xn\\\\aNhscEx5xYEsTcS1D5XLQmV2aatkZ6AmUlz9oGwcJmyCFyBVbz/rIi2zg+kTDOpqx6Vq4luRh/YXdiRVVPmLlkg8cZrZI9d8d40gCjvtIAlm+lhGrNSnu2kOA7e4mtoEtmH9tz6VatyXcXSR6qcdxI+BZmLtgiE7uZG9/FPbZN7YEbf4Q1OU4mHjwq+w4cpLGvbPiLBaJLaYSZwjG\\\\ctDjn/sDo0iOkpHGuDDSHijkfkTg4SJKvf9LwsZEvZVj6\\\\eXXlAS6QwXMknoptal22gvxUjlesHZA0W6IU9ZlXkEA9zlQBHEyCBsp4","m":"","p":"4ODRtezK+KvdfsfC70rNDy5V29x/s4K5maonmHVGH9p5IIlXxZoKQc33","ext":"PO1PfeQo15YrNCwfui+Hsb1jJIbaGzyp"}'),
#     ('width', '220'),
#     ('type', '2'),
#     ('version', '2.11.4'),
#     ('cb', 'CGPdOb1ih/BYh6eBYZdH7hmJafwSlNL58HKcx+u0GCSNVRFG/eGi8rJb\\ejqVZWZ'),
#     ('extraData', ''),
#     ('runEnv', '10'),
#     ('referer', 'https://dl.reg.163.com/webzj/v1.0.1/pub/index2_new.html'),
#     ('callback', '__JSONP_mg9nhvg_9'),
# )

response = requests.get('https://webzjcaptcha.reg.163.com/api/v2/check', headers=headers, params=params)
print(response.text)
#NB. Original query string below. It seems impossible to parse and
#reproduce query strings 100% accurately so the one below is given
#in case the reproduced version is not "correct".
# response = requests.get('https://webzjcaptcha.reg.163.com/api/v2/check?id=744e2a6324ec5370616241baf4507538&token=e049fd756028497482221a05f51eadbd&acToken=9ca17ae2e6ffcda170e2e6eed3d644fceba8aee66b8cac8fa6d54e938e8a85bc40b1b1a99ad539b39db794aa2af0feaec3b92af3b18492cf6bfbf08893d44e939e9eb7c14fa1b0f890f33baf8ab7d7e854ad86ee9e&data=%7B%22d%22%3A%228449cquwvswxRBwakTeQTPHrH28EkDg%2F%2F2R5TzOqH2GcAagmkaWpD5IkwzREXQSxZaHmuwfP9w8vblDTtXbb0hvpFafVf%2FoOWPMzwj1kgFmV%2FXN9mxdhST5EzNq2ZMVYNqHiPJydMo9kFMnofQt%5C%5Cut8sgZTGxtkQEHFXiXdFeuFva4vXXvMRiiaVabGv6Hm%2FGiTbUDQnzFZFPeoO2mnUwjI2Ram5SGp9mN9z0TEAxgX2PkXZzLd0gMHOtA7hkItn%2FpJD7r7AqrYIp6o6UcUP6nRSHnv0c8i%2FlIiUsO%5C%5CLnAUUqZCdpQ02T6RTlNmgfgq%5C%5CpBs71iRvCwF0XwUNWMkRTxEk%2BvEHeIWTInPClJ%5C%5Ctr8LqiPV%2FlP2owY%2BTbTEypLDsgpb%2FSMNMpyAHHFFidQjCGOM49YOxRBcr%2FEK2iijaPV2541axyWTfPGR22X94ASZuAaWpCINzCaUQ%2BhkUNDTmiYCk%2FBbESRS9%2FnCHhvYp2%5C%5CEG%5C%5CIANfAbI0RvFaiA8NrpRIPAz1%2FohMDITxZ98%2F%5C%5Ch%2F7rz%2BXeGAVQZirGezSC1bLor27zjxwSleB2jQCtAfttsYOy%5C%5CHgAGnfE1RS9boLjHjCpWA9cGOZ%2Ftf0%2FqKix7TnDFgTf4Xpf%2F6kSJ%2Ffn6U2GkAPHc67HditA8BzXlJsni6yUsqVB%2BdKDN%5C%5Canoyr0Fe4G7kCtmLIR%5C%5C%5C%5C%2F4oNFNNjKZnCz44qGc%5C%5CgHqwxbg2FTWk9ufQkTcoYdU2zbzx07P%5C%5CqaphVx1m7CStVKZiJ5S410fhlfISR0rzCOcA0AaXR%2FQgznV9DHO5ERWhd0U7D7r7UAHhAoQZ9mAJTSlhSgT6DciSiHVVHG8%5C%5C8FC8axdfAsn4T0aicTMIVGQi9m%2F%5C%5CY1iRxD%2FLxS%5C%5CZL%2FPV%2F0PoxsMXj%2Fgq4pSi6%2FZ5tVi1Tt7lRLluDO%2FSZBpiThr%2BaJDp6FB9aVt%2F0NuNHqP%5C%5CCCPaJpe5cjYzN%2FQvX0I8TxfXgHjL2CNvRP%5C%5CH2mIjRjUAKYXgGilWJw2fMCd2mzR607OeqapSYuMm7OoXFKwFC%2Fqfa8tCl%2Fj9D02HjKcerKEqRCMWKi1tDD199UIVPfF%5C%5C%2F7RvJMKB1omp9nABVfL0SwrOqVwqi88DGGk97D8xftEbhOmog06Rq04ijQgToOVP4CR6pEd5iXZ%2BL0CdULF7wxSNa26wbNdXWXnI%5C%5CwX%2FrqQxXgnPgWls%2Fslc3%22%2C%22m%22%3A%22%22%2C%22p%22%3A%226rD69Vb7ZKmThiONdndkcPHhso5J1D1A%2BBWqElD2pf8YzN7CTQd%2Fkp33%22%2C%22ext%22%3A%22CmLrE%2FguyOZME1txfHtChDkYBUr0SVkc%22%7D&width=220&type=2&version=2.11.4&cb=1GZllgzVHz7rqpkwmm8gcS6NRkLMuM9EYtzmNg8ziKfWIeImWR9I6ATbneiFu1Z4&extraData=&runEnv=10&referer=https%3A%2F%2Fdl.reg.163.com%2Fwebzj%2Fv1.0.1%2Fpub%2Findex2_new.html&callback=__JSONP_hcgafux_5', headers=headers)
