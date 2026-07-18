import Container from "../../common/Container";
import { Logo } from "../header";

function Footer() {
  return (
     <footer className="border-t bg-white py-10">
        <Container>
            <div className="flex flex-col items-center gap-4">
                <Logo />
                <p className="text-sm text-gray-500">
                    © 2026 PARLA Clean Shop. All rights reserved.
                </p>
            </div>
        </Container>
    </footer> 
  
  );
}

export default Footer;