import Split from '@/components/Common/Split';

const data = [
    {
        "image": "/dark/assets/imgs/partner-logos/White Logo - Hyde.svg",
        "link": "https://www.hyde.city/",
        "name": "Hyde Hotels",
    },
    {
        "image": "/dark/assets/imgs/partner-logos/caoba hotel logo.webp",
        "link": "https://caobahotels.com/",
        "name": "Caoba Hotel",
    },
    {
        "image": "/dark/assets/imgs/partner-logos/JetSet token.jpeg",
        "link": "https://jetsettoken.com/",
        "name": "JetSet Token",
    },
    {
        "image": "/dark/assets/imgs/partner-logos/buk trips logo.webp",
        "link": "https://www.buktrips.com/",
        "name": "Buk Trips",
    },
]

function Partners({ lightMode }) {
  return (
    <div className="clients section-padding pb-100 position-re">
      <div className="container">
        <div className="row justify-content-center mb-80">
          <div className="col-lg-6 text-center">
            <div className="text">
              <h3>Our Partners</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row md-marg">
              {
                data.map((item) => (
                  <div className="col-md-4 col-6 brand box-bg" key={Math.floor(Math.random() * 10000)}>
                    <div className="item mb-30 wow fadeIn" data-wow-delay=".6s">
                      <div className="img">
                        <img src={item.image} alt={item.name} width={60} height={60} />
                      </div>
                      <Split tag="a" href={item.link}  className="link">
                          { item.link }
                      </Split>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pattern patrn1 bg-img opacity-5" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/pattern.svg`}></div>
    </div>
  )
}

export default Partners
