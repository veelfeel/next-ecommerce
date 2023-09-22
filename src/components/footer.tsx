import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <Link href="/" className="logo">
            Condi-K
          </Link>
          <div className="footer-top-item">
            <ul className="social">
              <li className="social-item">
                <Link className="social-link social-tg" href="" target="_blank">
                  <Image
                    width={30}
                    height={30}
                    src="/icons/telegram.svg"
                    alt="Condik Telegram"
                  />
                </Link>
              </li>
              <li className="social-item">
                <Link className="social-link social-wa" href="" target="_blank">
                  <Image
                    width={30}
                    height={30}
                    src="/icons/whatsapp.svg"
                    alt="Condik Whatsapp"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-info">
            <span>Кондиционеры с доставкой по всей России</span>
            <span>
              <Link href="tel:+79881482838">8 (988) 148-28-38</Link>
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Магазин кондиционеров (с) 2023 Все права защищены.</p>
          <Link href="#">Политика конфиденциальности</Link>
        </div>
      </div>
    </footer>
  );
}
