import { createStore, applyMiddleware, Store } from 'redux'
import { ReducerStore } from '../Reducers'
import { createLogger } from 'redux-logger'
import { makeProjects } from '../Reducers/MakeProjects';
export type Environment = 'Rural' | 'Urbano' | 'Área legalmente protegida' | 'Corredor ecológico' | 'Águas costeiras ou marinhas' | 'Águas fluviais ou lacustres' | 'Áreas insulares (ilhas)'
export type TypesOfEnvironments = Array<Environment>
export const listOfEnvironments:TypesOfEnvironments = ['Rural','Urbano','Área legalmente protegida','Corredor ecológico','Águas costeiras ou marinhas','Águas fluviais ou lacustres','Áreas insulares (ilhas)']
export const mapDetailsToEnvironments: { [ key: string ]: Array<string> } = {
  ['Rural']: ['Terras Públicas (área degradada)', 'Terras Públicas (assentamento)', 'Terras Privadas (pastagem)', 'Terras Privadas (lavoura)', 'Terras Privadas (mineração)', 'Terras Privadas (área degradada)', 'Terras Privadas (reflorestamento)', 'Terras Privadas (floresta natural)'],
  ['Urbano']: ['Densamente Urbanizado', 'Região Periférica (baixa urbanização)'],
  ['Área legalmente protegida']: ['Unidade de CIbservação', 'Terra Indígena', 'Área de Preservação Permanente', 'Reserva Legal', 'Estação Ecológica', 'Reserva Biológica', 'Parque Nacional', 'Monumento Natural', 'Refúgio da Vida Silvestre', 'Área de Proteção Ambiental', 'Área de Relevante Interesse Ecológico', 'Floresta Nacional', 'Reserva Extrativista', 'Reserva de Fauna', 'Reserva de Desenvolvimento Sustentável', 'Reserva Particular do Patrimônio Natural'],
  ['Corredor ecológico']: ['Corredor ecológico'],
  ['Águas costeiras ou marinhas']: ['Águas costeiras ou marinhas'],
  ['Águas fluviais ou lacustres']: ['Águas fluviais ou lacustres'],
  ['Áreas insulares (ilhas)']: ['Áreas insulares (ilhas)']
}
export type CoreTheme = 'Água e Floresta' | 'Gestão Pesqueira Compartilhada' | 'Manejo e Conservação da Biodiversidade' | 'Planejamento e Gestão Territorial' | 'Qualidade Ambiental' | 'Sociedades Sustentáveis'
export type FederationUnity = 'AC' | 'AL' | 'AM' | 'AP' | 'BA' | 'CE' | 'DF' | 'ES' | 'GO' | 'MA' | 'MG' | 'MS' | 'MT' | 'PA' | 'PB' | 'PE' | 'PI' | 'PR' | 'RJ' | 'RN' | 'RO' | 'RR' | 'RS' | 'SC' | 'SE' | 'SP' | 'TO'
export type FederationUnityComplete = 'Acre' | 'Alagoas' | 'Amapá' | 'Amazonas' | 'Bahia' | 'Ceará' | 'Distrito Federal' | 'Espírito Santo' | 'Goiás' | 'Maranhão' | 'Mato Grosso' | 'Mato Grosso do Sul' | 'Minas Gerais' | 'Pará' | 'Paraíba' | 'Paraná' | 'Pernambuco' | 'Piauí' | 'Rio de Janeiro' | 'Rio Grande do Norte' | 'Rio Grande do Sul' | 'Rondônia' | 'Santa Catarina' | 'São Paulo' | 'Sergipe' | 'Tocantins'
export const federationUnitysCompletes: Array<FederationUnityComplete> = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Santa Catarina','São Paulo','Sergipe','Tocantins']
export const mapCountiesToFedetalUnitysComplete: {[ key: string ]: string[]} = {
  ['Acre']: ['Acrelância', 'Assis Brasil', 'Brasiléia', 'Bujari', 'Capixaba', 'Cruzeiro do Sul', 'Epitaciolândia', 'Feijó', 'Jordão', 'Mâncio Lima', 'Manoel Urbano', 'Marechal Thaumaturgo', 'Plácido de Castro', 'Porto Acre', 'Porto Walter', 'Rio Branco', 'Rodrigues Alves', 'Santa Rosa do Purus', 'Sena Madureira', 'Senador Guiomard', 'Taraucá', 'Xapuri'],
  ['Alagoas']: ['Água Branca','Anadia','Arapiraca','Atalaia','Barra de Santo Antônio','Barra de São Miguel','Batalha','Belém','Belo Monte','Boca da Mata','Branquinha','Cacimbinhas','Cajueiro','Campestre','Campo Alegre','Campo Grande','Canapi','Capela','Carneiros','Chã Preta','Coité do Nóia','Colônia Leopoldina','Coqueiro Seco','Coruripe','Craíbas','Delmiro Gouveia','Dois Riachos','Estrela de Alagoas','Feira Grande','Feliz Deserto','Flexeiras','Girau do Ponciano','Ibateguara','Igaci','Igreja Nova','Inhapi','Jacaré Dos Homens','Jacuípe','Japaratinga','Jaramataia','Jequiá da Praia','Joaquim Gomes','Jundiá','Junqueiro','Lagoa da Canoa','Limoeiro de Anadia','Maceió','Major Isidoro','Maragogi','Maravilha','Marechal Deodoro','Maribondo','Mar Vermelho','Mata Grande','Matriz de Camaragibe','Messias','Minador do Negrão','Monteirópolis','Murici','Novo Lino','Olho D´água Das Flores','Olho D´água do Casado','Olho D´água Grande','Olivença','Ouro Branco','Palestina','Palmeira Dos Índios','Pão de Açúcar','Pariconha','Paripueira','Passo de Camaragibe','Paulo Jacinto','Penedo','Piaçabuçu','Pilar','Pindoba','Piranhas','Poço Das Trincheiras','Porto Calvo','Porto de Pedras','Porto Real do Colégio','Quebrangulo','Rio Largo','Roteiro','Santa Luzia do Norte','Santana do Ipanema','Santana do Mundaú','São Brás','São José da Laje','São José da Tapera','São Luís do Quitunde','São Miguel Dos Campos','São Miguel Dos Milagres','São Sebastião','Satuba','Senador Rui Palmeira','Tanque D´arca','Taquarana','Teotônio Vilela','Traipu','União Dos Palmares','Viçosa'],
  ['Amapá']:[],
  ['Amazonas']:[],
  ['Bahia']:[],
  ['Ceará']:[],
  ['Distrito Federal']:[],
  ['Espírito Santo']:[],
  ['Goiás']:[],
  ['Maranhão']:[],
  ['Mato Grosso']:[],
  ['Mato Grosso do Sul']:[],
  ['Minas Gerais']:[],
  ['Pará']:[],
  ['Paraíba']:[],
  ['Paraná']: [],
  ['Pernambuco']: [],
  ['Piauí']: [],
  ['Rio de Janeiro']: [],
  ['Rio Grande do Norte']: [],
  ['Rio Grande do Sul']: [],
  ['Rondônia']: [],
  ['Santa Catarina']: [],
  ['São Paulo']: [],
  ['Sergipe']: [],
  ['Tocantins']: [],
}
export type Ecosystem = 'Amazônia' | 'Catinga' | 'Pampa' | 'Cerrado' | 'Mata Atlântica' | 'Pantanal' | 'Zona Costeira e Marinha'
export const listOfEcosystems: Array<Ecosystem> = ['Amazônia', 'Catinga', 'Cerrado', 'Mata Atlântica', 'Pampa', 'Pantanal', 'Zona Costeira e Marinha']
export type Physiognomy = 'Banhados e áreas úmidas' | 'Caating arbórea' | 'Caatinga arbustiva' | 'Caatinga arbustiva-arbórea' | 'Campinarana' | 'Campo' | 'Campo cerrado' | 'Campo chaquento' | 'Campo gramíneo-lenhoso' | 'Campo limpo' | 'Campo salino' | 'Cerradão' | 'Campo sujo' | 'Cerrado senso estrito' | 'Chaco' | 'Costão rochoso' | 'Duna' | 'Estuário' | 'Falésia' | 'Floresta estacional chaquenha' | 'Floresta estacional decidual' | 'Floresta estacional semidecidual' | 'Floresta ombrófila aberta' | 'Floresta ombrófila densa' | 'Floresta ombrófila mista' | 'Lagoa costeira' | 'Manguezal' | 'Mar territorial' | 'Marisma' | 'Mata ciliar' | 'Praia arenosa' | 'Recife de coral' | 'Restinga' | 'Veredas' | 'Zona econômica exclusiva' | 'Área de tensão ecológica' | 'Formação pioneira' | 'Rios e lagos' | 'Savana' | 'Savana estépica' | 'Campo de altitude' | 'Campo rupeste' | 'Vegetação secundária' | 'Campo arbóreo aberto'
export const listOfPhysiognomy: Array<Physiognomy> = ['Banhados e áreas úmidas','Caating arbórea','Caatinga arbustiva','Caatinga arbustiva-arbórea','Campinarana','Campo','Campo cerrado','Campo chaquento','Campo gramíneo-lenhoso','Campo limpo','Campo salino','Cerradão','Campo sujo','Cerrado senso estrito','Chaco','Costão rochoso','Duna','Estuário','Falésia','Floresta estacional chaquenha','Floresta estacional decidual','Floresta estacional semidecidual','Floresta ombrófila aberta','Floresta ombrófila densa','Floresta ombrófila mista','Lagoa costeira','Manguezal','Mar territorial','Marisma','Mata ciliar','Praia arenosa','Recife de coral','Restinga','Veredas','Zona econômica exclusiva','Área de tensão ecológica','Formação pioneira','Rios e lagos','Savana','Savana estépica','Campo de altitude','Campo rupeste','Vegetação secundária','Campo arbóreo aberto']
export type HydrographicRegion = 'Amazônica' | 'Tocantins-Araguaia' | 'Paraguai' | 'Paraná' | 'São Francisco' | 'Uruguai' | 'Atlântico Nodeste Ocidental' | 'Atlântico Nordeste Oriental' | 'Paranaíba' | 'Atlântico Leste' | 'Atlântico Sudeste' | 'Atlântico Sul'
export const listOfHydrographicRegion: Array<HydrographicRegion> = ['Amazônica', 'Atlântico Leste', 'Atlântico Nodeste Ocidental', 'Atlântico Nordeste Oriental', 'Atlântico Sudeste', 'Atlântico Sul', 'Paraguai', 'Paranaíba', 'Paraná', 'São Francisco', 'Tocantins-Araguaia', 'Uruguai']
export type TypeOfPopulation = 'Adolescentes' | 'Artesãos' | 'Assentados Rurais' | 'Catadores de Caranguejos' | 'Catadores de Materiais Recicláveis' | 'Crianças' | 'Extrativistas' | 'Indígenas' | 'Marisqueiros' | 'Moradores de Área da influência' | 'Moradores de Entrno de Unidade' | 'Ostreiros' | 'Pescadores' | 'Quilombolas' | 'Ribeirinhos' | 'Trabalhadores Rurais' | 'Universitários' | 'Outros'
export type ExpenseElement = 'Diárias' | 'Material de Consumo' | 'Passagens/Despesas com Locomoção' | 'Outros Serviços de Terceiros - Pessoa Física' | 'Outros Serviços de Terceiros - Pessoa Jurídica' | 'Equipamentos/Material Permanente' | 'Obras e Instalações'
export type NatureOfExpenditure = 'Despesas Correntes' | 'Despesas de Capital'
export type UnitOfMeasurement = 'ano' | 'caixa' | 'centímetro' | 'cento' | 'conjunto' | 'dezena' | 'dia' | 'dúzia' | 'grama' | 'grosa' | 'hectare' | 'homem/dia' | 'homem/hora' | 'homem/mês' | 'hora' | 'litro' | 'maço' | 'mês' | 'metro' | 'metro cúbico' | 'metro quadradro' | 'milheiro' | 'pacote' | 'quilograma' | 'quilômetro' | 'quilômetro quadrado' | 'resma' | 'rolo' | 'semana' | 'semestre' | 'tonelada' | 'trimestre' | 'unidade'
export type PayingSource = 'Instituição Proponente' | 'Instituição Parceira'
export type MaritalStatus = 'Solteiro' | 'Casado' | 'Viúvo' | 'Separado Judicialmente' | 'Divorciado' | 'União Estável'
export type TypeOfDemand = 'Espontânea' | 'Induzida'
export type TypeOfProject = 'Novo' | 'Complementação de projeto solicitada pelo FNMA'

interface ProjectCharacterization_ProjectIdentification_Form_MakeProjects{
  title?: string,
  typeOfDemand?: TypeOfDemand,
  coreTheme?: CoreTheme,
  projectNumber?: string,
  typeOfProject?: TypeOfProject
}
export interface ProjectCharacterization extends ProjectCharacterization_ProjectIdentification_Form_MakeProjects{}
interface GeographicLocation_ProjectIdentification_Form_MakeProjects{
  typesOfEnvironments?: TypesOfEnvironments,
  details?: string[],
  federationUnity?: Array<FederationUnityComplete>,
  filter?: string,
  counties?: string[],
  places?: string,
  geographicalCoordinates?: string
}
export interface GeographicLocation extends GeographicLocation_ProjectIdentification_Form_MakeProjects{}
interface EnvironmentalCharacterization_ProjectIdentification_Form_MakeProjects{
  ecosystems?: Array<Ecosystem>
  physiognomys?: Array<{ecosystem: Ecosystem,physiognomy: Physiognomy}>,
  hydrographicRegions?: Array<HydrographicRegion>
}
export interface EnvironmentalCharacterization extends EnvironmentalCharacterization_ProjectIdentification_Form_MakeProjects{}
interface ProjectSummary_ProjectIdentification_Form_MakeProjects{
  projectSummary?: string,
}
export interface ProjectSummary extends ProjectSummary_ProjectIdentification_Form_MakeProjects{}
interface Clarifications_ProjectIdentification_Form_MakeProjects{
  clarificationsOfTheInstitution?: string
}
export interface ProjectClarifications extends Clarifications_ProjectIdentification_Form_MakeProjects{}
interface ProjectIdentification_Form_MakeProjects {
  projectCharacterization: ProjectCharacterization_ProjectIdentification_Form_MakeProjects,
  geographicLocation: GeographicLocation_ProjectIdentification_Form_MakeProjects,
  environmentalCharacterization: EnvironmentalCharacterization_ProjectIdentification_Form_MakeProjects,
  projectSummary: ProjectSummary_ProjectIdentification_Form_MakeProjects,
  clarifications: Clarifications_ProjectIdentification_Form_MakeProjects
}
interface _ass_basic_info{
  cpf: string,
  name: string,
  documentation: {
    type: 'Identidade' | 'Passaporte',
    number: string,
    issuingBody: string,
    federationUnity: FederationUnity,
    issueDate: string,
    issuingCountry: string,
    shelfLife: string
  },
  formation: string,
  contact: any
}
interface Coordinator_ProjectCoordination_Form_MakeProjects extends _ass_basic_info{
  projectPreparedByCoordinator: boolean,
  coordinatorBelongsOfProposingInstitution: boolean,
  payingSource: PayingSource
}
interface ActivitiesOfTheCoordinator_ProjectCoordination_Form_MakeProjects{summaryOfActivitiesDevelopedByCoordinator: string}
interface FinancialManager_ProjectCoordination_Form_MakeProjects extends _ass_basic_info{
  coordinatorIsFinanciallyResponsible: boolean,
  responsibleBelongsOfProposingInstitution: boolean,
  payingSource: PayingSource
}
interface ActivitiesOfTheFinancialManager_ProjectCoordination_Form_MakeProjects{summaryOfActivitiesTheFinancial: string}
interface ProjectCoordination_Form_MakeProjects {
  coordinator: Coordinator_ProjectCoordination_Form_MakeProjects,
  activitiesOfTheCoordinator: ActivitiesOfTheCoordinator_ProjectCoordination_Form_MakeProjects,
  financialManager: FinancialManager_ProjectCoordination_Form_MakeProjects,
  activitiesOfTheFinancialManager: ActivitiesOfTheFinancialManager_ProjectCoordination_Form_MakeProjects
}

interface InstitutionsInvolved_PresentationOfTheInstitutions_Form_MakeProjects{
  listOfInstitutions: Array<{
    name: string,
    initials: string,
    cnpj: string,
    ActsOfInstitutionInProject: 'Proponente' | 'Interveniente' | 'Parceira' | 'Executora',
    contact: any,
    legalForm: {
      type: 'Pública' | 'Privada',
      scope: 'Municipal' | 'Estadual' | 'Federal' | 'Distrito Federal',
      category: 'Organização Ambientalista' | 'Organização de Apoio' | 'Organização de Base' | 'Fundação de Apoio a Universidades' | 'Outra',
      otherCategory: string,
      dateOfFoundation: string,
      statutoryPurposeInTheEnvironment: boolean,
      subscriptionInCnea: boolean,
      federalPublicUtilitTitle: boolean,
      titleOfOscip: boolean,
    },
    legalRepresentative: {
      cpf: string,
      name: string,
      documentation: {
        type: 'Identidade' | 'Passaporte',
        number: string,
        issuingBody: string,
        federationUnity: FederationUnity,
        issueDate: string,
        issuingCountry: string,
        shelfLife: string
      },
      function: string,
      office: string,
      registration: string,
      dateOfInauguration: string,
      endOfMandate: string,
      maritalStatus: MaritalStatus,
      nationality: string,
      contact: any,
    },
    responsibleUnits: Array<{
      name: string,
      initials: string
    }>,
    natureOfParticipation: string,
    historicalInteraction: string,
    involvementOfInstitutionInProject: string,
  }>
}
interface CharacterizationOfTheResponsibleUnits_PresentationOfTheInstitutions_Form_MakeProjects{
  characterizationOfTheResponsibleUnits: Array<{
    institution: string,
    unity: string,
    historyOfTheInstitutionOrUnit: string,
    purposeAndObjectivesOfTheInstitutionOrUnit: string,
    interactionWithTargetAudience: string,
    organizationalStructure: string,
    professionalFramework: {
      technicalStaff: {
        fullTime: string,
        partTime: string
      },
      middleLevelTechnicians: {
        fullTime: string,
        partTime: string
      },
      administrativeStaff: {
        fullTime: string,
        partTime: string
      },
      operationalStaff: {
        fullTime: string,
        partTime: string
      }
    }
  }>
}
interface PresentationOfTheInstitutions_Form_MakeProjects{
  institutionsInvolved: InstitutionsInvolved_PresentationOfTheInstitutions_Form_MakeProjects,
  characterizatioOfTheResponsibleUnits: CharacterizationOfTheResponsibleUnits_PresentationOfTheInstitutions_Form_MakeProjects
}

interface Diagnosis_Form_MakeProjects{
  diagnosis?: string,
}
export interface Diagnosis extends Diagnosis_Form_MakeProjects{}
interface Justification_Form_MakeProjects{
  justificationForTheDevelopmentOfTheProject: string
}
export interface Justification extends Justification_Form_MakeProjects{}
interface PopulationDirectlyInvolved_Form_MakeProjects{
  populationIdentification: {
    listOfPopulationCategories: Array<{
      typeOfPopulation: TypeOfPopulation,
      otherTypeOfPopulation: string,
      amountOfPeople: string,
      amountOfFamilies: string,
      amountOfWoman: string,
      participationAndInvolvementOfWomen: string,
      participationAndAppropriationOfResults : string
    }>
  }
}

interface ProjectGoal_PlanningProject_Form_MakeProjects{projectGoal: string}
interface Goals_PlanningProject_Form_MakeProjects{
  listOfGoals: Array<{
    id: number,
    title: string,
    amount: string,
    unity: string
  }>
}
interface Activities_PlanningProject_Form_MakeProjects{
  listOfActivities: Array<{
    goal: string,
    description: string,
    expectedProduct: {
      unitOfMeasurement: string,
      amount: string
    },
    schedule: {
      startMonth: string,
      endMonth: string
    },
    materialsAndMethods: string
  }>
}
interface RisksToExecution_PlanningProject_Form_MakeProjects{
  listOfRisksToExecution: Array<{
    goal: string,
    descriptionOfRisks: string,
    importance: 'baixa' | 'média' | 'Alta',
    potentialForOccurrence: 'baixa' | 'média' | 'Alta',
    problemsCausedByTheirOccurrence: string,
    strategyToMinimizeRisks: string
  }>
}
interface ExpectedResults_PlanningProject_Form_MakeProjects{expectedResults: string}
interface ContinuityStrategies_PlanningProject_Form_MakeProjects{continuityStrategies: string}
interface PlanningProject_Form_MakeProjects{
  projectGoal: ProjectGoal_PlanningProject_Form_MakeProjects,
  goals: Goals_PlanningProject_Form_MakeProjects,
  activities: Activities_PlanningProject_Form_MakeProjects,
  risksToExecution: RisksToExecution_PlanningProject_Form_MakeProjects,
  expectedResults: ExpectedResults_PlanningProject_Form_MakeProjects,
  continuityStrategies: ContinuityStrategies_PlanningProject_Form_MakeProjects
}

interface ExpenseItems_BudgetPlanning_Form_MakeProjects{
  listOfExpenseItems: Array<{
    natureOfExpenditure: NatureOfExpenditure,
    expenseElement: ExpenseElement,
    name: string,
    unitOfMeasurement: UnitOfMeasurement,
    unitaryValue: string
  }>
}
interface BudgetDetail_BudgetPlanning_Form_MakeProjects{
  inputsDeclaredForTargetAndActivities: Array<{
    goal: string,
    activitie: string,
    expenseItems: Array<{
      natureOfExpenditure: NatureOfExpenditure,
      expenseElement: ExpenseElement,
      expenseItem: string,
      quantityOfInputs: {
        fnma: string,
        cpFinanceira: string,
        cpMensurada: string
      },
      justificationOfInputsOfTheActivity: string
    }>
  }>
}
interface DeclaredInputs_BudgetPlanning_Form_MakeProjects{
  listOfInputs: Array<{
    expenseElement: ExpenseElement
    expenseItem: string,
    unity: string,
    unityValue: string
  }>
}
interface FinancialExecutionSchedule_BudgetPlanning_Form_MakeProjects{
  goal: string,
  activitie: string,
  expenseElement: string
}
interface BudgetPlanning_Form_MakeProjects{
  expenseItems: ExpenseItems_BudgetPlanning_Form_MakeProjects,
  budgetDetail: BudgetDetail_BudgetPlanning_Form_MakeProjects,
  declaredInputs: DeclaredInputs_BudgetPlanning_Form_MakeProjects,
  financialExecutionSchedule: FinancialExecutionSchedule_BudgetPlanning_Form_MakeProjects
}

interface AdditionalInformation_Form_MakeProjects{
  technicalTeam: any,
  curriculumVitae: any,
  termsOfReference: any,
  worksAndInstallations: any,
  permanentEquipmentAndMaterials: any
}

interface CallNotice_Form_MakeProjects{
  particularitiesOfThePublicNotice: string
}
interface Form_MakeProjects {
  projectIdentification: ProjectIdentification_Form_MakeProjects,
  projectCoordination: ProjectCoordination_Form_MakeProjects,
  presentationOfTheInstitutions: PresentationOfTheInstitutions_Form_MakeProjects,
  diagnosis: Diagnosis_Form_MakeProjects,
  justification: Justification_Form_MakeProjects,
  populationDirectlyInvolved: PopulationDirectlyInvolved_Form_MakeProjects,
  planningProject: PlanningProject_Form_MakeProjects,
  budgetPlanning: BudgetPlanning_Form_MakeProjects,
  additionalInformation: AdditionalInformation_Form_MakeProjects,
  callNotice: CallNotice_Form_MakeProjects
}
interface MakeProjects {
  form: Form_MakeProjects
  [ key: string ]: any
}

export interface State {
  makeProjects: MakeProjects,
}

export const defaultState: State = {
  makeProjects: {
    // @ts-ignore
    form: {
      projectIdentification: {
        projectCharacterization: {},
        geographicLocation: {},
        clarifications: {},
        environmentalCharacterization: {},
        projectSummary: {
          projectSummary: ''
        }
      },
      diagnosis:{},
      justification:{}
    }
  }
}

export const store: Store<State> = createStore( makeProjects, defaultState, applyMiddleware( createLogger() ) )