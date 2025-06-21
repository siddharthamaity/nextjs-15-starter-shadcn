import Link from 'next/link';

const RECOMMENDED_EXTENSIONS: string[] = [
    'PulkitGangwar.nextjs-snippets',
    'formulahendry.auto-close-tag',
    'aaron-bond.better-comments',
    'mikestead.dotenv',
    'EditorConfig.EditorConfig',
    'dbaeumer.vscode-eslint',
    'MikeBovenlander.formate',
    'donjayamanne.githistory',
    'wix.vscode-import-cost',
    'sburg.vscode-javascript-booster',
    'christian-kohler.npm-intellisense',
    'esbenp.prettier-vscode',
    'Gruntfuggly.todo-tree',
    'ChakrounAnas.turbo-console-log',
    'codeandstuff.package-json-upgrade',
    'KnisterPeter.vscode-commitizen',
    'yzhang.markdown-all-in-one',
    'bradlc.vscode-tailwindcss',
    'austenc.tailwind-docs',
    'stivo.tailwind-fold'
];

interface ExtensionStatistics {
    statisticName: string;
    value: number;
}

interface ExtensionFile {
    assetType: string;
    source: string;
}

interface ExtensionData {
    displayName: string;
    statistics: ExtensionStatistics[];
    versions: { files: ExtensionFile[] }[];
}

interface ExtensionDetails {
    name: string;
    displayName: string;
    downloadCount: number;
    iconUri: string;
}

// Fetch extension details function with types
const fetchExtensionDetails = async (extension: string): Promise<ExtensionDetails> => {
    const response = await fetch('https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json;api-version=3.0-preview.1'
        },
        body: JSON.stringify({
            filters: [
                {
                    criteria: [{ filterType: 7, value: extension }]
                }
            ],
            flags: 914
        })
    });

    const data = await response.json();
    const extensionData: ExtensionData = data.results[0].extensions[0];

    // Extract relevant details
    const downloadCount = extensionData.statistics.find((stat) => stat.statisticName === 'install')?.value ?? 0;
    const iconUri =
        extensionData.versions[0].files.find(
            (file) => file.assetType === 'Microsoft.VisualStudio.Services.Icons.Default'
        )?.source || '';

    return { name: extension, displayName: extensionData.displayName, downloadCount, iconUri };
};

// ExtensionDetails component with types
const ExtensionDetails: React.FC = async () => {
    const extensionDetails = await Promise.all(RECOMMENDED_EXTENSIONS.map(fetchExtensionDetails));

    return (
        <div className='mx-auto grid max-w-2xl grid-cols-6 gap-y-3 sm:grid-cols-10 sm:gap-y-6'>
            {extensionDetails.map((extension) => {
                return (
                    <div key={extension.name} className='group relative inline-flex justify-center'>
                        <Link href={``} target='_blank'>
                            <img className='size-9 hover:cursor-pointer' src={extension.iconUri} alt={extension.name} />
                        </Link>
                        <div className='absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 transform space-y-1.5 rounded bg-neutral-200 p-3 text-sm whitespace-nowrap text-black group-hover:block'>
                            <h3 className='text-lg'>{extension.displayName}</h3>
                            <p>Downloads: {extension.downloadCount.toLocaleString()}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ExtensionDetails;
