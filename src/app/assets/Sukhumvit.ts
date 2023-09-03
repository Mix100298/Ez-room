import localFont from 'next/font/local'

const Sukhumvit = localFont({
    src: [{
        path: './fonts/SukhumvitSet/SukhumvitSet-Text.ttf',
        weight: '400'
    },
    {
        path: './fonts/SukhumvitSet/SukhumvitSet-Bold.ttf',
        weight: '700'
    },
    {
        path: './fonts/SukhumvitSet/SukhumvitSet-Light.ttf',
        weight: '300'
    },
    {
        path: './fonts/SukhumvitSet/SukhumvitSet-Medium.ttf',
        weight: '500'
    },
    {
        path: './fonts/SukhumvitSet/SukhumvitSet-SemiBold.ttf',
        weight: '600'
    },
    {
        path: './fonts/SukhumvitSet/SukhumvitSet-Thin.ttf',
        weight: '100'
    },
    ],
    display: 'swap',
    variable : '--font-sukhumvit'
})

export default Sukhumvit