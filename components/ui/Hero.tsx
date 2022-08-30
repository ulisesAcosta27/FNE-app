import {
  Title,
  Text,
  Container,
  Button,
  Overlay,
  createStyles,
  Image,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 232,
    paddingBottom: 100,
    backgroundImage:
      "url(https://elexpresodejujuy.com.ar/download/multimedia.normal.8b9f8f018d3c2d67.313536393437303630313837335f6e6f726d616c2e6a7067.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "top",

    "@media (max-width: 520px)": {
      paddingTop: 90,
      paddingBottom: 60,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: "center",

    "@media (max-width: 520px)": {
      fontSize: theme.fontSizes.md,
      textAlign: "left",
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: "flex",
    justifyContent: "center",

    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },

  logo: {
    height: 150,
    width: 200,
  },
}));

const Hero = () => {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Container className={classes.logo}>
          <Image
            radius="md"
            src="https://static.wixstatic.com/media/886585_7b8661773d6640f69371e38fe3df6f72~mv2.png/v1/crop/x_47,y_61,w_469,h_417/fill/w_229,h_204,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo%20ente%20pagina.png"
            alt="logo fne"
          />
        </Container>

        <Title className={classes.title}>
          Capital Nacional de la Juventud y la Primavera{" "}
          <Text component="span" inherit className={classes.highlight}>
            16 al 24 de Septiembre
          </Text>
        </Title>

        <Container size={800}>
          <Text italic size="lg" weight={500} color="#CED4DA">
            {" "}
            La Fiesta Nacional de los Estudiantes (FNE) se realiza todos los
            años en la provincia de Jujuy, Argentina. Se celebra durante la
            semana del estudiante y da la bienvenida a la primavera. Por tal
            razón se dice que en esa época Jujuy se transforma en la Capital
            Nacional de la Juventud y la Primavera
          </Text>
          <Text
            component="span"
            align="center"
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: 45 }}
            size="xl"
            weight={700}
            style={{ fontFamily: "Greycliff CF, sans-serif" }}
          ></Text>
        </Container>

        <div className={classes.controls}>
          <Button
            radius="md"
            variant="gradient"
            gradient={{ from: "orange", to: "red" }}
            size="lg"
          >
            Compra tus entradas aca
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
