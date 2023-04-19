using System;
using System.IO;
using System.Threading.Tasks;

public class MoodDetectionService
{
    private const string Happy = "Happy";
    private const string Sad = "Sad";
    private const string Calm = "Calm";
    private readonly Random _random;

    public MoodDetectionService()
    {
        _random = new Random();
    }

    public async Task<string> DetectMood(Stream audioStream)
    {
        var config = SpeechConfig.FromSubscription("YourSubscriptionKey", "YourServiceRegion");
        using var audioInput = AudioConfig.FromStreamInput(audioStream);
        using var recognizer = new SpeechRecognizer(config, audioInput);

        var result = await recognizer.RecognizeOnceAsync();
        var mood = _random.Next(1, 4); // Generate a random mood between 1 and 3
        switch (mood)
        {
            case 1:
                return Happy;
            case 2:
                return Sad;
            case 3:
                return Calm;
            default:
                return string.Empty;
        }
    }
}

