addSubDomain({
  description: 'vpn', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'atp1', // desired subdomain name
  owner: {
    repo: '',
    email: '',
  },
  record: {
    CNAME: 'erfanatp.github.io'
  },
})
