import { Container } from "./components/Container";
import { ArrowBottom } from "./components/icons/ArrowBottom";
import { ArrowLeft } from "./components/icons/ArrowLeft";
import { ArrowRight } from "./components/icons/ArrowRight";
import { ArrowTop } from "./components/icons/ArrowTop";
import { MouseCursor } from "./components/icons/MouseCursor";
import { Key } from "./components/Key";
import { TableCell } from "./components/TableCell";
import { TableTitle } from "./components/TableTitle";

export const App = () => {
  return (
    <div className="min-h-full bg-slate-900 pb-8 selection:bg-amber-300 selection:text-black">
      <Container>
        <h1 className="py-8 text-2xl font-semibold">Skróty klawiszowe</h1>
        <p className="text-slate-400">
          Skróty klawiszowe których najczęściej używam w VSCode
        </p>
        <table className="mt-8 w-full text-left">
          <thead>
            <tr>
              <TableTitle className="rounded-l-md">Działanie</TableTitle>
              <TableTitle className="rounded-r-md">Klawisze</TableTitle>
            </tr>
          </thead>
          <tbody className="text-slate-400">
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
            <tr>
              <TableCell>Wyszukiwanie plików po nazwie</TableCell>
              <TableCell>
                <Key>Ctrl</Key> + <Key>P</Key>
              </TableCell>
            </tr>
            <tr>
              <TableCell>Pokazanie/schowanie terminala</TableCell>
              <TableCell>
                <Key>Ctrl</Key> + <Key>~</Key>
              </TableCell>
            </tr>
            <tr>
              <TableCell>Wyszukiwanie tekstu w projekcie</TableCell>
              <TableCell>
                <Key>Ctrl</Key> + <Key>Shift</Key> + <Key>F</Key>
              </TableCell>
            </tr>
            <tr>
              <TableCell>Wyszukiwanie tekstu w otwartym pliku</TableCell>
              <TableCell>
                <Key>Ctrl</Key> + <Key>F</Key>
              </TableCell>
            </tr>
            <tr>
              <TableCell>Tworzenie wielu kursorów</TableCell>
              <TableCell>
                <Key>Alt</Key> + <MouseCursor />
              </TableCell>
            </tr>
            <tr>
              <TableCell>Paleta komend</TableCell>
              <TableCell>
                <Key>Ctrl</Key> + <Key>Shift</Key> + <Key>P</Key>
              </TableCell>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
};
