import md5 from 'js-md5'

export default {
  methods: {
    $log(str) {
      console.log(str)
    },
    $encrypt(str) {
      return md5('ts' + md5(str).split('').reverse().join('') + 'iis').split('').reverse().join('')
    }
  }
}