import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { ArrowBottom } from "./components/icons/ArrowBottom";
import { ArrowLeft } from "./components/icons/ArrowLeft";
import { ArrowRight } from "./components/icons/ArrowRight";
import { ArrowTop } from "./components/icons/ArrowTop";
import { MouseCursor } from "./components/icons/MouseCursor";
import { Key } from "./components/Key";
import { TableCell } from "./components/TableCell";

export const App = () => {
  return (
    <div className="min-h-full bg-slate-900 selection:bg-amber-300 selection:text-black">
      <Container>
        <h1 className="py-8 text-3xl font-semibold">Skróty klawiszowe</h1>
        <p className="text-slate-400">
          Skróty klawiszowe których najczęściej używam w VSCode
        </p>
        <div className="overflow-x-auto">
          <table className="mt-10 w-full whitespace-nowrap text-left text-slate-400">
            <thead>
              <tr>
                <th
                  colSpan={2}
                  className="pb-4 text-xl font-semibold text-white"
                >
                  Kursor
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableCell>Zmiana pozycji kursora w tekście</TableCell>
                <TableCell>
                  <Key>
                    <ArrowRight />
                  </Key>
                  ,{" "}
                  <Key>
                    <ArrowLeft />
                  </Key>
                  ,{" "}
                  <Key>
                    <ArrowTop />
                  </Key>
                  ,{" "}
                  <Key>
                    <ArrowBottom />
                  </Key>
                </TableCell>
              </tr>
              <tr>
                <TableCell>Skakanie kursorem po słowach</TableCell>
                <TableCell>
                  <Key>Ctrl</Key> +{" "}
                  <Key>
                    <ArrowLeft />
                  </Key>{" "}
                  /{" "}
                  <Key>
                    <ArrowRight />
                  </Key>
                </TableCell>
              </tr>
              <tr>
                <TableCell>Tworzenie wielu kursorów</TableCell>
                <TableCell>
                  <Key>Alt</Key> + <MouseCursor />
                </TableCell>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th
                  colSpan={2}
                  className="pb-4 pt-8 text-xl font-semibold text-white"
                >
                  Edytowanie
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableCell>Kopiuj zaznaczony tekst lub linię</TableCell>
                <TableCell>
                  <Key>Ctrl</Key> + <Key>C</Key>
                </TableCell>
              </tr>
              <tr>
                <TableCell>Wklej</TableCell>
                <TableCell>
                  <Key>Ctrl</Key> + <Key>V</Key>
                </TableCell>
              </tr>
              <tr>
                <TableCell>Wytnij zaznaczony tekst lub linię</TableCell>
                <TableCell>
                  <Key>Ctrl</Key> + <Key>X</Key>
                </TableCell>
              </tr>
              <tr>
                <TableCell>
                  Wstaw nową linię na końcu obecnej (działa w środku tekstu)
                </TableCell>
                <TableCell>
                  <Key>Ctrl</Key> + <Key>Enter</Key>
                </TableCell>
              </tr>
              <tr>
                <TableCell>
                  Kopiuj i wklej zaznaczony tekst lub linię do góry lub do dołu
                </TableCell>
                <TableCell>
                  <Key>Alt</Key> + <Key>Shift</Key> +{" "}
                  <Key>
                    <ArrowTop />
                  </Key>{" "}
                  /{" "}
                  <Key>
                    <ArrowBottom />
                  </Key>
                </TableCell>
              </tr>
              <tr>
                <TableCell>Zaznacz wszystko</TableCell>
                <TableCell>
                  <Key>Ctrl</Key> + <Key>A</Key>
                </TableCell>
              </tr>
              <tr>
                <TableCell>Zaznaczanie tekstu po jednym znaku</TableCell>
                <TableCell>
                  <Key>Shift</Key> +{" "}
                  <Key>
                    <ArrowLeft />
                  </Key>{" "}
                  /{" "}
                  <Key>
                    <ArrowRight />
                  </Key>
                </TableCell>
              </tr>
              <tr>
                <TableCell>Zaznaczanie tekstu po całych słowach</TableCell>
                <TableCell>
                  <Key>Shift</Key> + <Key>Ctrl</Key> +{" "}
                  <Key>
                    <ArrowLeft />
                  </Key>{" "}
                  /{" "}
                  <Key>
                    <ArrowRight />
                  </Key>
                </TableCell>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th
                  colSpan={2}
                  className="pb-4 pt-8 text-xl font-semibold text-white"
                >
                  Interfejs
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableCell>Wyszukaj pliki po nazwie</TableCell>
                <TableCell>
                  <Key>Ctrl</Key> + <Key>P</Key>
                </TableCell>
              </tr>
              <tr>
                <TableCell>Wyszukaj tekst w projekcie</TableCell>
                <TableCell>
                  <Key>Ctrl</Key> + <Key>Shift</Key> + <Key>F</Key>
                </TableCell>
              </tr>
              <tr>
                <TableCell>Wyszukaj tekst w pliku</TableCell>
                <TableCell>
                  <Key>Ctrl</Key> + <Key>F</Key>
                </TableCell>
              </tr>
              <tr>
                <TableCell>Paleta komend</TableCell>
                <TableCell>
                  <Key>Ctrl</Key> + <Key>Shift</Key> + <Key>P</Key>
                </TableCell>
              </tr>
              <tr>
                <TableCell>Pokaż/schowaj terminal</TableCell>
                <TableCell>
                  <Key>Ctrl</Key> + <Key>~</Key>
                </TableCell>
              </tr>
            </tbody>
          </table>
        </div>
        <Footer />
      </Container>
    </div>
  );
};
